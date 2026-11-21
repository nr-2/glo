import markup from './markup';

// The UI is driven by the original vanilla JS in public/glo.js,
// so the markup is rendered once as static HTML and left to that script.
export default function Home() {
  return <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: markup }} />;
}
