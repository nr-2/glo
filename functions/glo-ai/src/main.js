// Appwrite Function: one Gemini call per execution.
// The browser runs the tool loop (read_data / save_data act on the user's own
// data in the page), so this function only forwards a single model turn and
// keeps the Gemini API key off the client.
//
// Environment variables (set in the Appwrite Console → Function → Settings):
//   GEMINI_API_KEY  required
//   GEMINI_MODEL           optional, defaults to gemini-3.5-flash-lite
//   GEMINI_FALLBACK_MODEL  optional, defaults to gemini-3.6-flash (used if the first is busy)
//   GEMINI_TIMEOUT_MS      optional, per-model timeout, defaults to 12000
// Set the function's Timeout (Settings) to at least 30 seconds.

const MAX_BODY = 300_000; // bytes
const MAX_TURNS = 80;

export default async ({ req, res, error }) => {
  if (req.method !== 'POST') return res.json({ error: 'method_not_allowed' }, 405);

  // Only signed-in Glo users can use the assistant.
  if (!req.headers['x-appwrite-user-id']) return res.json({ error: 'unauthorized' }, 401);

  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    error('GEMINI_API_KEY is not set');
    return res.json({ error: 'not_configured' }, 500);
  }

  const raw = req.bodyText || '';
  if (raw.length > MAX_BODY) return res.json({ error: 'too_large' }, 413);

  let body;
  try {
    body = JSON.parse(raw || '{}');
  } catch {
    return res.json({ error: 'bad_json' }, 400);
  }

  const { contents, tools } = body;
  if (!Array.isArray(contents) || !contents.length || contents.length > MAX_TURNS) {
    return res.json({ error: 'bad_contents' }, 400);
  }

  const request = { contents };
  if (Array.isArray(tools) && tools.length) {
    request.tools = [
      {
        functionDeclarations: tools.slice(0, 10).map((t) => ({
          name: String(t.name),
          description: String(t.description || ''),
          parametersJsonSchema: t.parameters || { type: 'object', properties: {} },
        })),
      },
    ];
  }

  // Try the main model, then the fallback if it's overloaded, rate-limited or slow.
  const models = [
    process.env.GEMINI_MODEL || 'gemini-3.5-flash-lite',
    process.env.GEMINI_FALLBACK_MODEL || 'gemini-3.6-flash',
  ].filter((m, i, a) => m && a.indexOf(m) === i);
  const perTry = Number(process.env.GEMINI_TIMEOUT_MS) || 12_000;

  let r, data;
  for (const model of models) {
    try {
      r = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
        {
          method: 'POST',
          headers: { 'content-type': 'application/json', 'x-goog-api-key': key },
          body: JSON.stringify(request),
          signal: AbortSignal.timeout(perTry),
        }
      );
      data = await r.json();
    } catch (e) {
      error(`Gemini ${model} request failed: ${e}`);
      r = null;
      continue;
    }
    if (r.ok) break;
    error(`Gemini ${model} ${r.status}: ${JSON.stringify(data?.error || data).slice(0, 500)}`);
    if (![429, 500, 503, 504].includes(r.status)) break; // not worth retrying (bad key, bad request…)
  }

  if (!r) return res.json({ error: 'upstream_unreachable' }, 502);
  if (!r.ok) {
    return res.json({ error: data?.error?.status || 'upstream_error' }, r.status === 429 ? 429 : 502);
  }

  // Return the model's content as-is: function-call parts carry thought
  // signatures that must be sent back unchanged on the next turn.
  const content = data?.candidates?.[0]?.content || { role: 'model', parts: [] };
  return res.json({ content });
};
