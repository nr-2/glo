  const THEMES={
    warm:{n:"الأصلي",lbg:"#F8F1E3",lcard:"#FFFAF0",lsoft:"#EFE6D3",blue:"#B9CDEF",green:"#B5C27A",pink:"#F4B9D6",yellow:"#F3DC86",peach:"#F5C7A1",life:"#E4DCCB",assist:"#F4B9D6",acc:"#F4B9D6",heart:"#E58DB8",lred:"#E5484D"},
    cool:{n:"بارد",lbg:"#EEF2F6",lcard:"#FFFFFF",lsoft:"#E2E8EF",blue:"#BCD3F2",green:"#A8D8D3",pink:"#CFC6F0",yellow:"#C4E3C8",peach:"#B9C3F3",life:"#D6DEE8",assist:"#CFC6F0",acc:"#B9C3F3",heart:"#A99BE6",lred:"#2F57D6"},
    blue:{n:"أزرق وكحلي",lbg:"#EDF2F9",lcard:"#FFFFFF",lsoft:"#DCE5F1",blue:"#A9C4EB",green:"#7FA6DB",pink:"#C9D9F2",yellow:"#B5CBE8",peach:"#8DB0E0",life:"#D3DEEC",assist:"#BFD3F1",acc:"#8DB0E0",heart:"#7FA6DB",lred:"#1F3F8A"},
    mono:{n:"رمادي",lbg:"#F2F2F2",lcard:"#FFFFFF",lsoft:"#E3E3E3",blue:"#D2D2D2",green:"#B5B5B5",pink:"#E3E3E3",yellow:"#C7C7C7",peach:"#F2D16B",life:"#DCDCDC",assist:"#F2D16B",acc:"#F2D16B",heart:"#E2B93B",lred:"#1D1D1D"},
    olive:{n:"زيتي وبيج",lbg:"#F4F1E8",lcard:"#FFFDF7",lsoft:"#E7E2D2",blue:"#CBCFB2",green:"#A3AE7E",pink:"#DCCFB5",yellow:"#BAC59C",peach:"#CDB994",life:"#E2DCCB",assist:"#D3D9B5",acc:"#A3AE7E",heart:"#8C9866",lred:"#4F5B2E"},
    neon:{n:"نيون",lbg:"#F2F2F7",lcard:"#FFFFFF",lsoft:"#E5E5EA",blue:"#9FD6FF",green:"#D2F28A",pink:"#F1C3F7",yellow:"#FFB3C4",peach:"#CFC3FF",life:"#DCDCE0",assist:"#D2F28A",acc:"#C6F432",heart:"#A6D22A",lred:"#FA114F"},
    purple:{n:"بنفسجي",lbg:"#F4F1FA",lcard:"#FFFFFF",lsoft:"#E7E1F3",blue:"#D7CCF2",green:"#B9A6E8",pink:"#E8CBEF",yellow:"#CFC0EC",peach:"#A893DE",life:"#E2DCEF",assist:"#DCCFF5",acc:"#B9A6E8",heart:"#A893DE",lred:"#5E35C4"}
  };
  const grad=t=>`conic-gradient(${t.blue} 0 25%,${t.green} 0 50%,${t.pink} 0 75%,${t.peach} 0)`;
  const DARKS={
    warm:{blue:"#5AA9FF",green:"#B8D84A",pink:"#FF6FAE",yellow:"#FFD24A",peach:"#FF9F5A",life:"#A1988A",acc:"#FF6FAE"},
    cool:{blue:"#5AC8FA",green:"#4FE3C1",pink:"#B79CFF",yellow:"#7CE6A0",peach:"#8C9EFF",life:"#8E9AAB",acc:"#8C9EFF"},
    blue:{blue:"#64B5F6",green:"#2F7BFF",pink:"#9CCBFF",yellow:"#4DA3FF",peach:"#5C8DFF",life:"#7F8EA3",acc:"#4DA3FF"},
    mono:{blue:"#D0D0D0",green:"#A0A0A0",pink:"#E8E8E8",yellow:"#B8B8B8",peach:"#FFD60A",life:"#8E8E93",acc:"#FFD60A"},
    olive:{blue:"#C9D48A",green:"#A8C256",pink:"#E3C58F",yellow:"#B7D36B",peach:"#E0A867",life:"#9A957F",acc:"#B7D36B"},
    neon:{blue:"#40B4FF",green:"#B6F22E",pink:"#E58CF2",yellow:"#FF3B6B",peach:"#A48CFF",life:"#8E8E93",acc:"#C6F432"},
    purple:{blue:"#C3A6FF",green:"#9B6BFF",pink:"#F09BFF",yellow:"#B18CFF",peach:"#7C5CFF",life:"#8E87A3",acc:"#C3A6FF"}
  };
function startApp(){
  const I={
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4"/>',
    moon:'<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/>',
    cap:'<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    dumbbell:'<path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11"/>',
    music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
    shower:'<path d="M4 4l2.5 2.5"/><path d="M13.5 6.5a4.95 4.95 0 0 0-7 7"/><path d="M15 5 5 15"/><path d="M14 17v.01M10 16v.01M13 13v.01M16 10v.01M11 20v.01M17 14v.01M20 11v.01"/>',
    book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
    clip:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
    bed:'<path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"/>',
    coffee:'<path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><path d="M6 2v2M10 2v2M14 2v2"/>',
    spark:'<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
    bottle:'<path d="M9 2h6v3H9z"/><path d="M8 5h8l1 4v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9z"/><path d="M7 12h10"/>',
    arrow:'<path d="m15 18-6-6 6-6"/>',
    x:'<path d="M18 6 6 18M6 6l12 12"/>',
    flag:'<path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.7 2a6.6 6.6 0 0 0 3.7-1.1.5.5 0 0 1 .6.4V14a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-7.7-2A6.6 6.6 0 0 0 4 15"/>',
    pencil:'<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>',
    folder:'<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
    flame:'<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
    timer:'<path d="M10 2h4M12 14l3-3"/><circle cx="12" cy="14" r="8"/>',
    send:'<path d="M22 2 11 13"/><path d="m22 2-7 20-4-9-9-4z"/>',
    check:'<path d="M20 6 9 17l-5-5"/>',
    leaf:'<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>'
  };
  const ico=(n,sw=1.8)=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${I[n]}</svg>`;

  // ---- language ----
  const EX={
"اليوم ينحسب إذا خلصت ٨٠٪ من مهامك ووصلت هدف الماي. اليوم الحالي ما يكسر السلسلة لين يخلص.":"A day counts when you finish 80% of your tasks and hit your water goal. Today won't break the streak until it's over.",
"أقدر أعدل أي شي في جدولك: المهام وأوقاتها، التمارين، روتين الشعر والجسم، المحاضرات، المواعيد، وهدف الماي.":"I can change anything in your schedule: tasks and times, workouts, hair & body routine, classes, deadlines and your water goal.",
"قول له وش تبي يضيف أو يغيّر أو يحذف":"Tell it what to add, change or delete",
"حط زيت الشعر قبل الشاور بساعتين دايماً، واستخدم التايمر فوق.":"Always apply hair oil 2 hours before showering — use the timer above.",
"يوم الجمعة سوّ الستامب أول، وبعده زيت الشعر (تركيبة ١) على طول.":"On Friday, do the derma stamp first, then hair oil (mix 1) right after.",
"نظّف الستامب بالكحول قبل وبعد كل استخدام.":"Clean the stamp with alcohol before and after every use.",
"تسبح كل يوم، بس الشامبو في أيام الروتين بس. باقي الأيام شاور كاب أو ماي بس.":"Shower daily, but shampoo only on routine days. Other days: shower cap or water only.",
"نيزورال: خلّه ٣–٥ دقايق على الفروة قبل لا تشطفه.":"Nizoral: leave it on your scalp 3–5 minutes before rinsing.",
"حط الكريم بعد الشاور على طول والجلد بعده رطب.":"Apply cream right after showering while skin is still damp.",
"في يومك، اضغط على التمرين لما تخلصه وينشطب.":"On the day, tap an exercise when you finish it to check it off.",
"سخّن ٥–١٠ دقايق قبل، وستريتش بعد.":"Warm up 5–10 min before, stretch after.",
"لما تكمل كل العدات بسهولة، زيد الوزن شوي.":"When all reps feel easy, add a bit of weight.",
"الجمعة راحة كاملة.":"Friday is a full rest day.",
"خلص الوقت! روح اتسبح واغسل الزيت":"Time's up! Go shower and wash out the oil",
"خلصت كل مهام اليوم! فخور فيك":"You finished all of today's tasks! Proud of you",
"جدولك فاضي. ضيف مهامك أو خل الـ AI يسويه لك":"Your schedule is empty. Add your tasks or let the AI build it for you",
"سوّ جدولي بالـ AI":"Build it with AI",
"سجّل أول قياس عشان يطلع الرسم":"Log your first measurement to see the chart",
"سجّل قياس ثاني عشان تشوف الفرق":"Log a second measurement to see the change",
"المساعد مو مفعّل في هالنسخة للحين. بنربطه بـ Gemini قريب.":"The assistant isn't enabled in this version yet. We'll connect it to Gemini soon.","حسابي":"My account","تسجيل خروج":"Log out","الاسم":"Name","الإيميل":"Email",
"ما عطيت الصفحة إذن تستخدم Claude.":"You didn't give the page permission to use Claude.",
"كثرت الطلبات، جرّب بعد شوي.":"Too many requests — try again in a bit.",
"صار خطأ، جرّب مرة ثانية.":"Something went wrong, try again.",
"ما في مواعيد. اضغط \"+ إضافة\" تحط اختبار أو واجب.":"No deadlines yet. Tap \"+ Add\" to add an exam or assignment.",
"كوب ماي + روتين البشرة الصباحي":"Glass of water + morning skincare",
"على الفروة، قبل الشاور بساعتين":"On the scalp, 2 hours before showering",
"50 دقيقة تركيز + 10 راحة، مرتين":"50 min focus + 10 break, twice",
"رتّب الأسبوع الجاي وراجع الدروس":"Plan next week and review lessons",
"راحة للفروة، بدون شامبو":"Scalp rest day, no shampoo",
"زر تايمر زيت الشعر (ساعتين)":"Hair oil timer button (2 hours)",
"انسخها بعد لأيام ثانية (اختياري)":"Also copy to other days (optional)",
"اضغط على القطرة كل ما تشرب":"Tap the drop every time you drink",
"المهام اللي خلصتها":"Tasks completed","نسبة كل يوم هالأسبوع":"Daily % this week","مل كل يوم هالأسبوع":"ml per day this week",
"عدّل جدولك بالـ AI":"Edit your schedule with AI","تقدمي هالأسبوع":"My week","وش تبي أغيّر؟":"What should I change?",
"خلصت من مهام اليوم":"of today's tasks done","أيام ورا بعض":"day streak","يوم ورا بعض":"day streak",
"تتبع الـ Glow Up":"Glow Up tracker","ساعتين قبل الشاور":"2 hours before showering","ابدأ تايمر ساعتين":"Start 2-hour timer",
"متأكد؟ اضغط مرة ثانية":"Sure? Tap again","رجّعت مثل ما كان":"Reverted","انحفظ التعديل":"Saved","قاعد أفكر...":"Thinking...",
"ويكند (إجازة)":"Weekend (off)","ما عندك محاضرات":"No classes","ما في جامعة":"No uni","راحة من التمرين":"Rest from training",
"رجوع لليوم":"Back to today","شوف باچر":"See tomorrow","مثلاً: قراءة":"e.g. Reading","مثلاً: Midterm أو Lab 3":"e.g. Midterm or Lab 3",
"تفاصيل (اختياري)":"Details (optional)","اسم المهمة":"Task name","تعديل المهمة":"Edit task","مهمة جديدة":"New task","+ مهمة جديدة":"+ New task",
"الكريم بعد الاستحمام":"After-shower cream","الوزن (كجم)":"Weight (kg)","الخصر (سم)":"Waist (cm)","الورك (سم)":"Hips (cm)","الفخذ (سم)":"Thigh (cm)","الذراع (سم)":"Arm (cm)",
"اكتب طلبك...":"Type your request...","تم":"Done",
"غيّر وقت الجيم يوم الأحد للساعة 5":"Move Sunday's gym to 5 PM","ضيف اختبار Cloud Security يوم 20 نوفمبر":"Add a Cloud Security exam on Nov 20","بدّل Chest fly بـ Incline dumbbell press":"Swap Chest fly for Incline dumbbell press","خل هدف الماي 3 لتر":"Set my water goal to 3 liters","ضيف مهمة قراءة كل يوم الساعة 9 بالليل":"Add a reading task every day at 9 PM","أضف كوب":"Add a glass","الوضع الداكن":"Dark mode","الألوان":"Colors"
  };
  const PH=[
["روتين البشرة الليلي","Night skincare"],["وجهّز أغراض باچر","and prep for tomorrow"],["مراجعة الأسبوع","Weekly review"],["الجوال بعيد","Phone away"],
["ستامب ثم زيت الشعر","Stamp, then hair oil"],["ستامب + زيت الشعر","Stamp + hair oil"],["نظّف الستامب بالكحول","Clean the stamp with alcohol"],
["تايمر زيت الشعر","Hair oil timer"],["زيت الشعر","Hair oil"],["تركيبة ١","mix 1"],["تركيبة ٢","mix 2"],["اغسل زيت الشعر","Wash out hair oil"],["نيزورال للشعر","Nizoral for hair"],["غسيل بنيزورال","Wash with Nizoral"],["غسيل بالشامبو","Shampoo wash"],
["بدون شامبو","No shampoo"],["غسول لطيف","Gentle wash"],["مرطب عادي","Regular moisturizer"],["بعدين","then"],
["الفخذ الأمامي","Quads"],["المؤخرة والهامسترينج","Glutes & hamstrings"],["صدر، ترايسبس، أكتاف","Chest, triceps, shoulders"],["ظهر، بايسبس، بطن","Back, biceps, core"],["بيلي دانس","Belly dance"],
["محاضرات يوم","Classes ·"],["تمرين يوم","Workout ·"],["العناية يوم","Care ·"],["مهام يوم","Tasks ·"],["تغسله الساعة","Wash at"],["من أول قياس","since first entry"],
["مواعيد قريبة","Upcoming"],["أقسام اليوم","Today's categories"],["الشعر والجسم","Hair & body"],["حجم الكوب","Glass size"],["الهدف اليومي","Daily goal"],
["أيام الجيم","Gym days"],["معدل الماي","Avg water"],["أكواب · الهدف","glasses · goal"],["محاضرات · تخلص","classes · ends"],["بعد يومين","in 2 days"],
["صباح الخير","Good morning"],["مساء الخير","Good afternoon"],["مساء النور","Good evening"],["أزرق وكحلي","Blue & navy"],["زيتي وبيج","Olive & beige"],
["آخر مرة:","Last:"],["↑ زيد","↑ add"],["راحة كاملة","Full rest"],["− كوب","− glass"],["من جديد","Restart"],["خلصتها","Done"],["تراجع","Undo"],
["الجاي:","Next:"],["الساعة","at"],["صحيان","Wake up"],["مذاكرة","Study"],["شاور","Shower"],["نوم","Sleep"],["حط ","Apply "],
["الأحد","Sunday"],["الاثنين","Monday"],["الثلاثاء","Tuesday"],["الأربعاء","Wednesday"],["الخميس","Thursday"],["الجمعة","Friday"],["السبت","Saturday"],
["أحد","Sun"],["اثنين","Mon"],["ثلاثاء","Tue"],["أربعاء","Wed"],["خميس","Thu"],["جمعة","Fri"],["سبت","Sat"],
["ما في جامعة","No uni"],["راحة من التمرين","Rest from training"],["ويكند","Weekend"],["المساعد","Assistant"],["مساعدك","Assistant"],["تقدمي","Progress"],["الجامعة","University"],["التمارين","Workouts"],["العناية","Care"],["الماي","Water"],["اليوم","Today"],
["الجيم","Gym"],["الدانس","Dance"],["المذاكرة","Study"],["الروتين","Routine"],["الجدول","Schedule"],["المواعيد","Deadlines"],["المواد","Courses"],["ملاحظات","Notes"],
["تعديل","Edit"],["خلصت","Done"],["إضافة","Add"],["تسجيل","Log"],["التاريخ","Date"],["حفظ","Save"],["حذف","Delete"],["إلغاء","Cancel"],["تصفير","Reset"],["ابدأ","Start"],
["اختبار","Exam"],["واجب","Assignment"],["مشروع","Project"],["المادة","Course"],["العنوان","Title"],["ثاني","Other"],["فات","Past"],["باچر","Tomorrow"],
["الوقت","Time"],["القسم","Category"],["الأيقونة","Icon"],["الأيام","Days"],["الاسم","Name"],["الوصف","Description"],["التمارين","Exercises"],["+ تمرين","+ Exercise"],
["الشعر","Hair"],["شامبو","Shampoo"],["راحة","Rest"],["دانس","Dance"],["جيم","Gym"],["وش تسوي","What to do"],["الغسول","Body wash"],["+ محاضرة","+ Class"],["+ مادة","+ Course"],
["ضيف مادة أول من زر","Add a course first with"],["الوزن","Weight"],["الخصر","Waist"],["الورك","Hips"],["الفخذ","Thigh"],["الذراع","Arm"],["كجم","kg"],["سم","cm"],
["المهام","Tasks"],["ماي","Water"],["محاضرات","classes"],["أقسام","categories"],["الأصلي","Original"],["بارد","Cool"],["رمادي","Grey"],["نيون","Neon"],["بنفسجي","Purple"],
["مل","ml"],["كوب","glass"],["يوم","day"],["أيام","days"],["باقي","left"]
  ].sort((a,b)=>b[0].length-a[0].length);
  const RULES=[
    [/^باقي (\d+) أيام$/,'$1 days left'],
    [/^المهام (\d+)% · جيم (\d+)\/4 · ماي ([\d,]+) مل$/,'Tasks $1% · Gym $2/4 · Water $3 ml'],
    [/^(\d+) أكواب · الهدف ([\d,]+) مل( ✓)?$/,'$1 glasses · goal $2 ml$3'],
  ];
  const AD={'٠':'0','١':'1','٢':'2','٣':'3','٤':'4','٥':'5','٦':'6','٧':'7','٨':'8','٩':'9','٪':'%','،':',','؟':'?'};
  const AR=/[؀-ۿ]/;
  function tr(t){
    const k=t.trim();if(!k||!AR.test(k))return t;
    if(EX[k]!==undefined)return t.replace(k,EX[k]);
    for(const [re,rep] of RULES)if(re.test(k))return t.replace(k,k.replace(re,rep));
    let o=k;for(const [a,b] of PH){if(!o.includes(a))continue;if(a.trim().length<=3)o=o.replace(new RegExp('(?<![\u0600-\u06FF])'+a+'(?![\u0600-\u06FF])','g'),b);else o=o.split(a).join(b)}
    o=o.replace(/\bday (Sun|Mon|Tues|Wednes|Thurs|Fri|Satur)day/g,'$1day');
    o=o.replace(/[٠-٩٪،؟]/g,c=>AD[c]);
    return t.replace(k,o);
  }
  const LANG=(()=>{try{return localStorage.getItem('lang')||'ar'}catch(e){return 'ar'}})();
  function trNode(root){
    if(LANG!=='en')return;
    const skip=n=>{const e=n.nodeType===1?n:n.parentElement;return !e||e.closest('.msg,textarea,script,style,[data-noi18n]')};
    const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);const list=[];let n;while(n=w.nextNode())list.push(n);
    list.forEach(n=>{if(skip(n))return;const v=tr(n.nodeValue);if(v!==n.nodeValue)n.nodeValue=v});
    (root.querySelectorAll?root.querySelectorAll('[placeholder],[aria-label]'):[]).forEach(e=>{['placeholder','aria-label'].forEach(a=>{const v=e.getAttribute(a);if(v&&AR.test(v))e.setAttribute(a,tr(v))})});
  }
  if(LANG==='en'){document.title='Glo';
    new MutationObserver(ms=>{ms.forEach(m=>{if(m.type==='characterData'){if(AR.test(m.target.nodeValue))trNode(m.target.parentElement||document.body)}else m.addedNodes.forEach(x=>{if(x.nodeType===3){if(AR.test(x.nodeValue)&&!(x.parentElement&&x.parentElement.closest('.msg,textarea')))x.nodeValue=tr(x.nodeValue)}else if(x.nodeType===1)trNode(x)})})}).observe(document.body,{childList:true,subtree:true,characterData:true});
  }
  const acct=document.getElementById('acct');const GU=window.GLO_USER||{};acct.textContent=((GU.name||GU.email||'?').trim()[0]||'?').toUpperCase();acct.setAttribute('data-noi18n','');
  acct.onclick=()=>openSheet('حسابي',`<div class="fld"><span>الاسم</span><div style="font-size:16px;font-weight:600">${hEsc(GU.name||'—')}</div></div><div class="fld"><span>الإيميل</span><div style="font-size:15px" class="ltr" data-noi18n>${hEsc(GU.email||'')}</div></div>`,{saveTxt:'تسجيل خروج',onSave:()=>{window.gloLogout&&gloLogout();return false}});
  const langb=document.getElementById('langb');langb.textContent=LANG==='en'?'ع':'EN';langb.setAttribute('data-noi18n','');
  langb.onclick=()=>{try{localStorage.setItem('lang',LANG==='en'?'ar':'en')}catch(e){};location.reload()};

  const names=["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"];
  const today=new Date().getDay();
  const CAT={
    uni:{n:"الجامعة",c:"var(--blue)",i:"cap"},
    gym:{n:"الجيم",c:"var(--green)",i:"dumbbell"},
    dance:{n:"الدانس",c:"var(--pink)",i:"music"},
    care:{n:"العناية",c:"var(--yellow)",i:"leaf"},
    study:{n:"المذاكرة",c:"var(--peach)",i:"book"},
    life:{n:"الروتين",c:"var(--life)",i:"moon"}
  };

  // ---- data ----
  // New accounts start empty: everyone builds their own schedule (by hand or with the AI).
  let CARE=[0,1,2,3,4,5,6].map(()=>({type:"rest",wash:"—",cream:"—"}));
  let W={0:{rest:true},1:{rest:true},2:{rest:true},3:{rest:true},4:{rest:true},5:{rest:true},6:{rest:true}};
  let C={};
  let U={0:[],1:[],2:[],3:[],4:[],5:[],6:[]};

  const fmt=t=>{let[h,m]=t.split(':').map(Number);const ap=h<12?'AM':'PM';h=h%12||12;return h+':'+String(m).padStart(2,'0')+' '+ap};
  const esc=s=>/[A-Za-z]/.test(s)?`<span class="ltr">${s}</span>`:s;

  function buildDefaultDays(){return [[],[],[],[],[],[],[]]}
  let DAYS=buildDefaultDays();
  const DEFCFG=JSON.parse(JSON.stringify({care:CARE,workouts:W,courses:C,classes:U,days:DAYS}));
  function applyCfg(c){CARE=c.care;W=c.workouts;C=c.courses;U=c.classes;DAYS=c.days}
  try{const sv=JSON.parse(localStorage.getItem('cfg'));if(sv&&sv.days&&sv.care&&sv.workouts&&sv.courses&&sv.classes)applyCfg(sv)}catch(e){}
  const saveCfg=()=>{try{localStorage.setItem('cfg',JSON.stringify({care:CARE,workouts:W,courses:C,classes:U,days:DAYS}))}catch(e){}};
  const hEsc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const bidi=t=>String(t||'').split(/([A-Za-z][A-Za-z0-9 .+'\-×]*[A-Za-z0-9]|[A-Za-z])/).map((p,i)=>i%2?`<span class="ltr">${hEsc(p)}</span>`:hEsc(p)).join('');
  const pad2=t=>/^\d:\d\d$/.test(t)?'0'+t:t;
  function dayEvents(d){
    const E=[],seen={};
    const push=o=>{const t=pad2(o.t);let id=t+o.k;while(seen[id])id+='_';seen[id]=1;const k=CAT[o.k]?o.k:'life';
      E.push({id,t,k,title:bidi(o.title),sub:bidi(o.sub||''),i:I[o.i]?o.i:CAT[k].i,oil:!!o.oil,ix:o._ix})};
    (U[d]||[]).forEach(([s,e,c])=>push({t:s,k:'uni',title:C[c]?C[c][0]:c,sub:String(s).replace(/^0/,'')+' – '+String(e).replace(/^0/,'')}));
    (DAYS[d]||[]).forEach((o,ix)=>push({...o,_ix:ix}));
    return E.sort((a,b)=>a.t.localeCompare(b.t));
  }

  // ---- storage ----
  const dkey=new Date().toDateString();
  const load=k=>{try{const o=JSON.parse(localStorage.getItem(k)||'{}');return o.d===dkey?(o.v||{}):{}}catch(e){return{}}};
  const store=(k,v)=>{try{localStorage.setItem(k,JSON.stringify({d:dkey,v}))}catch(e){}};
  let done=load('evdone'), wdone=load('wkdone');

  // ---- home ----
  let sel=today,EDIT=false;
  function arc(cx,cy,r,a0,a1){const p=a=>[cx+r*Math.cos(a*Math.PI/180),cy+r*Math.sin(a*Math.PI/180)];const[x0,y0]=p(a0),[x1,y1]=p(a1);return `M${x0} ${y0} A${r} ${r} 0 ${a1-a0>180?1:0} 1 ${x1} ${y1}`}
  function renderHome(){
    const E=dayEvents(sel),isT=sel===today,n=E.length,dn=isT?E.filter(e=>done[e.id]).length:0;
    // ring
    const seg=360/n,gap=24,r=112;let svg='';
    E.forEach((e,i)=>{const a0=-90+i*seg+gap/2,a1=-90+(i+1)*seg-gap/2;const on=!isT||done[e.id];
      svg+=`<path class="seg" d="${arc(150,150,r,a0,a1)}" style="stroke:${CAT[e.k].c}" stroke-width="40" stroke-linecap="round" fill="none" opacity="${on?1:.38}"/>`;
      const am=(-90+i*seg+gap/2)*Math.PI/180,x=150+r*Math.cos(am),y=150+r*Math.sin(am);
      svg+=`<circle cx="${x}" cy="${y}" r="15" style="fill:var(--ringbg)"/><g transform="translate(${x-8} ${y-8}) scale(.6667)" fill="none" style="stroke:var(--ringic)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${I[e.i]}</g>`;});
    document.getElementById('ring').innerHTML=svg;
    document.getElementById('big').innerHTML=isT?`${dn}<small>/${n}</small>`:`${n}`;
    document.getElementById('lbl').innerHTML=isT?'خلصت من مهام اليوم <i>i</i>':`مهام يوم ${names[sel]}`;
    document.getElementById('daypill').textContent=isT?'اليوم · '+names[sel]:names[sel];
    // assistant
    const at=document.getElementById('atext'),ab=document.getElementById('abtn');
    if(isT){
      const now=new Date(),nm=String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0');
      const pend=E.filter(e=>!done[e.id]);const nx=pend.find(e=>e.t>=nm)||pend[0];
      if(!n){at.innerHTML='جدولك فاضي. ضيف مهامك أو خل الـ AI يسويه لك';ab.textContent='سوّ جدولي بالـ AI';ab.onclick=()=>{location.hash='ai'};}
      else if(nx){at.innerHTML=`الجاي: ${nx.title} الساعة <b class="ltr">${fmt(nx.t)}</b>`;ab.textContent='خلصتها';ab.onclick=()=>{done[nx.id]=1;store('evdone',done);renderHome();recordDay()};}
      else{at.innerHTML='خلصت كل مهام اليوم! فخور فيك';ab.textContent='شوف باچر';ab.onclick=()=>{sel=(today+1)%7;renderHome()};}
    }else{
      const g=W[sel]||{rest:true},u=(U[sel]||[]).length;
      at.innerHTML=`يوم ${names[sel]}: ${u?u+' محاضرات':'ما في جامعة'} · ${g.rest?'راحة من التمرين':esc(g.t)}`;
      ab.textContent='رجوع لليوم';ab.onclick=()=>{sel=today;renderHome()};
    }
    // systems
    const cats={};E.forEach(e=>{(cats[e.k]=cats[e.k]||{t:0,d:0}).t++;if(isT&&done[e.id])cats[e.k].d++;});
    document.getElementById('cnt').textContent=Object.keys(cats).length+' أقسام';
    document.getElementById('sys').innerHTML=Object.entries(cats).map(([k,v])=>{const pct=isT?v.d/v.t*100:100;
      return `<div class="srow" style="--c:${CAT[k].c}"><div class="ic">${ico(CAT[k].i)}</div><div class="sbody"><div class="sname">${CAT[k].n}</div><div class="bar"><i style="width:${pct}%"></i></div></div><div class="sval">${isT?v.d:v.t}<small> of ${v.t}</small></div></div>`}).join('');
    // timeline
    if(EDIT){document.getElementById('tl').innerHTML=E.map(e=>`<div class="ev ed" data-ix="${e.ix??''}" data-k="${e.k}" style="--c:${CAT[e.k].c}"><div class="ic">${ico(e.i)}</div><div class="eb"><div class="et">${e.title}</div>${e.sub?`<div class="es">${e.sub}</div>`:''}</div><span class="tp">${fmt(e.t)}</span><div class="ck">${ico('pencil',2)}</div></div>`).join('');
      document.querySelectorAll('#tl .ev').forEach(el=>el.onclick=()=>{el.dataset.k==='uni'&&el.dataset.ix===''?editClasses(sel):editEvent(sel,+el.dataset.ix)});return;}
    document.getElementById('tl').innerHTML=E.map(e=>`<div class="ev${isT?'':' ro'}${isT&&done[e.id]?' done':''}" data-id="${e.id}" style="--c:${CAT[e.k].c}"><div class="ic">${ico(e.i)}</div><div class="eb"><div class="et">${e.title}</div>${e.sub?`<div class="es">${e.sub}</div>`:''}${isT&&e.oil?`<button class="tbtn" data-oil="1">${ico('timer',2)} ابدأ تايمر ساعتين</button>`:''}</div><span class="tp">${fmt(e.t)}</span><div class="ck">${ico("check",3)}</div></div>`).join('');
    if(isT) document.querySelectorAll('#tl .tbtn').forEach(b=>b.onclick=e=>{e.stopPropagation();startOil()});
    if(isT) document.querySelectorAll('#tl .ev').forEach(el=>el.onclick=()=>{const id=el.dataset.id;done[id]=done[id]?0:1;store('evdone',done);renderHome();recordDay()});
  }
  document.getElementById('prev').onclick=()=>{sel=(sel+6)%7;renderHome()};
  document.getElementById('next').onclick=()=>{sel=(sel+1)%7;renderHome()};
  document.getElementById('daypill').onclick=()=>{sel=today;renderHome()};

  // ---- care ----
  const badge=d=>d===today?'<span class="badge">اليوم</span>':'';
  function renderCare(){document.getElementById('careCards').innerHTML=CARE.map((c,d)=>{
    const ic=ico(c.type==='rest'?'moon':(c.type==='shampoo'?'bottle':'leaf'));
    const col=c.type==='rest'?'var(--life)':(c.type==='shampoo'?'var(--blue)':'var(--yellow)');
    const what=c.type==='rest'?'راحة للفروة، بدون شامبو':c.what;
    return `<div class="card${d===today?' today':''}"><div class="ch"><div class="ic" style="--c:${col}">${ic}</div><div><div class="cn">${names[d]}${badge(d)}</div><div class="cw">${what}</div></div></div>
      <div class="grid2"><div class="mini"><div class="k">الغسول</div><div class="v">${esc(c.wash)}</div></div><div class="mini"><div class="k">الكريم بعد الاستحمام</div><div class="v">${esc(c.cream)}</div></div></div></div>`}).join('');}
  renderCare();

  // ---- workout ----
  // ---- weight log ----
  const NOW={"Plank":1,"Crunches":1};
  const tKey=(()=>{const n=new Date();return n.getFullYear()+'-'+String(n.getMonth()+1).padStart(2,'0')+'-'+String(n.getDate()).padStart(2,'0')})();
  let WLOG={};try{WLOG=JSON.parse(localStorage.getItem('wlog'))||{}}catch(e){}
  const todayW=ex=>{const e=(WLOG[ex]||[]).find(x=>x.d===tKey);return e?e.w:null};
  const lastW=ex=>{const a=(WLOG[ex]||[]).filter(x=>x.d<tKey).sort((p,q)=>p.d.localeCompare(q.d));if(!a.length)return null;const l=a[a.length-1],p=a[a.length-2];return {w:l.w,same:!!p&&p.w===l.w}};
  function renderWk(){
  document.getElementById('wkCards').innerHTML=[0,1,2,3,4,5,6].map(d=>{
    const x=W[d]||{rest:true},isT=d===today;
    if(x.rest) return `<div class="card rest${isT?' today':''}"><div class="ch"><div class="ic" style="--c:var(--life)">${ico("moon")}</div><div><div class="cn">${names[d]}${badge(d)}</div><div class="cw">راحة كاملة</div></div></div></div>`;
    const col=x.dance?'var(--pink)':'var(--green)';
    const rows=x.ex?`<div class="rows">${x.ex.map((r,i)=>{const id=d+'-'+i,hasW=!NOW[r[0]],L=lastW(r[0]),tw=todayW(r[0]);
      const last=hasW&&L?`<div class="last">آخر مرة: <b class="ltr">${L.w} kg</b>${L.same?'<span class="up">↑ زيد</span>':''}</div>`:'';
      const kg=hasW?`<label class="kg"><input inputmode="decimal" data-ex="${r[0]}" value="${tw??''}" placeholder="${L?L.w:'—'}"><span>kg</span></label>`:'';
      return `<div class="row${isT?' chk':''}${isT&&wdone[id]?' done':''}" data-id="${id}" style="--c:${col}"><div class="xb"><span class="x">${r[0]}${r[2]?` <small>(${r[2]})</small>`:''}</span>${last}</div>${kg}<span class="r">${r[1]}</span></div>`}).join('')}</div>`:'';
    return `<div class="card${isT?' today':''}"><div class="ch"><div class="ic" style="--c:${col}">${ico(x.dance?'music':'dumbbell')}</div><div><div class="cn">${names[d]}${badge(d)}</div><div class="cw">${esc(x.t)} · ${x.sub}</div></div></div>${rows}</div>`}).join('');
  document.querySelectorAll('.row.chk').forEach(el=>el.onclick=e=>{if(e.target.closest('.kg'))return;const id=el.dataset.id;wdone[id]=wdone[id]?0:1;el.classList.toggle('done',!!wdone[id]);store('wkdone',wdone)});
  document.querySelectorAll('.kg input').forEach(inp=>{inp.onclick=e=>e.stopPropagation();inp.onchange=()=>{const ex=inp.dataset.ex,v=inp.value.trim().replace(',','.');
    const a=(WLOG[ex]||[]).filter(x=>x.d!==tKey);if(v!==''&&!isNaN(+v))a.push({d:tKey,w:+v});WLOG[ex]=a;try{localStorage.setItem('wlog',JSON.stringify(WLOG))}catch(e){}
    document.querySelectorAll(`.kg input[data-ex="${ex}"]`).forEach(o=>{if(o!==inp)o.value=inp.value})}});
  }
  renderWk();

  // ---- uni ----
  function renderUni(){document.getElementById('uniCards').innerHTML=[0,1,2,3,4,5,6].map(d=>{
    const L=U[d],isT=d===today;
    if(!L||!L.length) return `<div class="card rest${isT?' today':''}"><div class="ch"><div class="ic" style="--c:var(--life)">${ico(L?'coffee':'sun')}</div><div><div class="cn">${names[d]}${badge(d)}</div><div class="cw">${L?'ما عندك محاضرات':'ويكند'}</div></div></div></div>`;
    return `<div class="card${isT?' today':''}"><div class="ch"><div class="ic" style="--c:var(--blue)">${ico("cap")}</div><div><div class="cn">${names[d]}${badge(d)}</div><div class="cw">${L.length} محاضرات · تخلص ${String(L[L.length-1][1]).replace(/^0/,'')}</div></div></div>
      <div class="rows">${L.map(([s,e,c])=>`<div class="row cls" style="--c:${C[c]?C[c][1]:"var(--life)"}"><span class="x">${C[c]?C[c][0]:c}</span><span class="r">${String(s).replace(/^0/,'')}–${String(e).replace(/^0/,'')}</span></div>`).join('')}</div></div>`}).join('');}
  renderUni();

  // ---- nav ----
  const TITLES={ai:"المساعد",cal:"اليوم",progress:"تقدمي",water:"الماي",care:"الشعر والجسم",workout:"التمارين",uni:"الجامعة"};
  const h=new Date().getHours();
  document.getElementById('hello').textContent=(h<12?'صباح الخير':(h<18?'مساء الخير':'مساء النور'))+(window.GLO_USER&&GLO_USER.name?'، '+GLO_USER.name.split(' ')[0]:'');
  function show(v){
    document.querySelectorAll('.view').forEach(x=>x.classList.toggle('on',x.id==='v-'+v));
    document.querySelectorAll('.nav button[data-v]').forEach(b=>b.classList.toggle('on',b.dataset.v===v));
    document.getElementById('vtitle').textContent=TITLES[v];
    if(v==='progress'&&typeof renderProgress==='function')renderProgress();
    document.getElementById('composer').classList.toggle('on',v==='ai');
    window.scrollTo(0,0);
  }
  document.querySelectorAll('.nav button[data-v]').forEach(b=>b.onclick=()=>{show(b.dataset.v);try{history.replaceState(null,'','#'+b.dataset.v)}catch(e){}});
  document.getElementById('plus').onclick=()=>{sel=today;renderHome();show('cal');try{history.replaceState(null,'','#cal')}catch(e){}};
  
  let curTheme='cool';
  const isDark=()=>document.documentElement.dataset.theme==='dark';
  const colorsOf=k=>{const t=THEMES[k];if(!isDark())return t;const d=DARKS[k];return {...t,...d,heart:d.acc,lred:d.acc}};
  function applyPalette(k){curTheme=THEMES[k]?k:'cool';const t=colorsOf(curTheme);const st=document.documentElement.style;
    Object.entries(t).forEach(([a,v])=>{if(a!=='n')st.setProperty('--'+a,v)});
    document.getElementById('pal').style.background=grad(t);pop.querySelectorAll('.sw').forEach(b=>b.querySelector('i').style.background=grad(colorsOf(b.dataset.k)));
    document.querySelectorAll('.sw').forEach(b=>b.classList.toggle('on',b.dataset.k===curTheme));
    try{localStorage.setItem('palette',curTheme)}catch(e){}}
  const pop=document.getElementById('pop');
  pop.innerHTML=Object.entries(THEMES).map(([k,t])=>`<button class="sw" data-k="${k}"><i style="background:${grad(t)}"></i>${t.n}</button>`).join('');
  pop.querySelectorAll('.sw').forEach(b=>b.onclick=e=>{e.stopPropagation();applyPalette(b.dataset.k);pop.classList.remove('on')});
  document.getElementById('pal').onclick=e=>{e.stopPropagation();pop.classList.toggle('on')};
  document.addEventListener('click',e=>{if(!pop.contains(e.target))pop.classList.remove('on')});
  let pk=null;try{pk=localStorage.getItem('palette')}catch(e){}
  applyPalette(pk||'cool');
  const setTheme=t=>{document.documentElement.dataset.theme=t;applyPalette(curTheme);document.getElementById('avatar').innerHTML=ico(t==='dark'?'sun':'moon');try{localStorage.setItem('theme',t)}catch(e){}};
  let th=null;try{th=localStorage.getItem('theme')}catch(e){}
  if(!th) th=(window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light';
  setTheme(th);
  document.getElementById('avatar').onclick=()=>setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark');
  document.getElementById('ak').innerHTML=`<span style="width:14px;height:14px;display:inline-flex">${ico('spark',2)}</span> مساعدك`;document.getElementById('aheart').innerHTML=`<span style="display:block;width:110px;height:110px">${ico('spark',1.4)}</span>`;

  // ---- dates / history ----
  const pad=n=>String(n).padStart(2,'0');
  const iso=d=>d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());
  const TODAY=iso(new Date());
  const parseISO=s=>{const[a,b,c]=s.split('-').map(Number);return new Date(a,b-1,c)};
  const daysTo=s=>Math.round((parseISO(s)-parseISO(TODAY))/864e5);
  const getJ=(k,def)=>{try{return JSON.parse(localStorage.getItem(k))??def}catch(e){return def}};
  const setJ=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
  let HIST=getJ('hist',{});
  function recordDay(){
    if(typeof wl==='undefined')return;
    const E=dayEvents(today);
    HIST[TODAY]={gl:GOAL,t:E.length,d:E.filter(e=>done[e.id]).length,w:(wl.list||[]).reduce((a,b)=>a+b,0),
      g:E.some(e=>e.k==='gym'&&done[e.id])?1:0,dn:E.some(e=>e.k==='dance'&&done[e.id])?1:0};
    setJ('hist',HIST);renderPTile();renderStreak();
  }
  const weekDates=()=>{const n=new Date();const s=new Date(n.getFullYear(),n.getMonth(),n.getDate()-n.getDay());return [...Array(7)].map((_,i)=>new Date(s.getFullYear(),s.getMonth(),s.getDate()+i))};
  function weekStats(){
    const W7=weekDates().map(d=>({d,k:iso(d),h:HIST[iso(d)]}));
    const past=W7.filter(x=>x.k<=TODAY&&x.h);
    const T=past.reduce((a,x)=>a+x.h.t,0),D=past.reduce((a,x)=>a+x.h.d,0);
    const wd=past.filter(x=>x.h.w>0);
    return {W7,pct:T?Math.round(D/T*100):0,gym:past.reduce((a,x)=>a+x.h.g,0),dance:past.reduce((a,x)=>a+x.h.dn,0),
      avgW:wd.length?Math.round(wd.reduce((a,x)=>a+x.h.w,0)/wd.length):0};
  }
  function miniRing(p){const r=19,c=2*Math.PI*r;return `<circle cx="23" cy="23" r="${r}" fill="none" style="stroke:var(--soft)" stroke-width="6"/><circle cx="23" cy="23" r="${r}" fill="none" style="stroke:var(--peach)" stroke-width="6" stroke-linecap="round" stroke-dasharray="${c*p/100} ${c}" transform="rotate(-90 23 23)"/><text x="23" y="27" text-anchor="middle" font-size="11" font-weight="700" style="fill:var(--ink)">${p}%</text>`}
  function renderPTile(){
    const s=weekStats();
    document.getElementById('pring').innerHTML=miniRing(s.pct);
    document.getElementById('psub').textContent=`المهام ${s.pct}% · جيم ${s.gym}/4 · ماي ${s.avgW.toLocaleString('en')} مل`;
  }
  const okDay=h=>h&&h.t&&h.d/h.t>=.8&&h.w>=(h.gl||2500);
  function renderStreak(){
    let n=0;const d=new Date();const k=x=>iso(x);
    const todayOk=okDay(HIST[TODAY]);if(todayOk)n++;
    for(let i=1;i<400;i++){const x=new Date(d.getFullYear(),d.getMonth(),d.getDate()-i);if(okDay(HIST[k(x)]))n++;else break}
    const el=document.getElementById('streak');el.classList.toggle('lit',todayOk);
    el.innerHTML=`${ico('flame',2)}<span class="ltr">${n}</span><small>${n===1?'يوم':'أيام'} ورا بعض</small>`;
  }
  document.getElementById('streak').onclick=()=>document.getElementById('shint').classList.toggle('on');
  document.getElementById('parr').innerHTML=ico('arrow',2);
  document.getElementById('ptile').onclick=()=>{show('progress');renderProgress()};

  // ---- deadlines ----
  const DLT={exam:{n:"اختبار",i:"pencil"},hw:{n:"واجب",i:"book"},proj:{n:"مشروع",i:"folder"}};
  let DL=getJ('deadlines',[]),dlType='exam';
  const sel1=document.getElementById('dlCourse');
  const fillCourses=()=>{sel1.innerHTML=Object.entries(C).map(([k,v])=>`<option value="${k}">${hEsc(v[0])}</option>`).join('')+'<option value="other">ثاني</option>'};fillCourses();
  document.getElementById('dlDate').value=TODAY;
  document.querySelectorAll('#dlType button').forEach(b=>b.onclick=()=>{dlType=b.dataset.t;document.querySelectorAll('#dlType button').forEach(x=>x.classList.toggle('on',x===b))});
  document.getElementById('dlAdd').onclick=()=>document.getElementById('dlForm').classList.toggle('on');
  const leftTxt=n=>n<0?'فات':n===0?'اليوم':n===1?'باچر':n===2?'بعد يومين':`باقي ${n} أيام`;
  const courseName=k=>C[k]?C[k][0]:'';
  const escH=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  function dlItem(x,withDel){
    const n=daysTo(x.date),col=C[x.course]?C[x.course][1]:'var(--life)';
    return `<div class="dli"><div class="ic" style="--c:${col}">${ico(DLT[x.type].i)}</div><div class="db"><div class="dt">${DLT[x.type].n}${x.title?': <span class="ltr">'+escH(x.title)+'</span>':''}</div><div class="ds"><span class="ltr">${courseName(x.course)}</span>${courseName(x.course)?' · ':''}${x.date}</div></div><span class="left${n>=0&&n<=3?' hot':''}">${leftTxt(n)}</span>${withDel?`<button class="del" data-id="${x.id}" aria-label="حذف">${ico('x',2.2)}</button>`:''}</div>`;
  }
  function renderDL(){
    DL.sort((a,b)=>a.date.localeCompare(b.date));
    const up=DL.filter(x=>daysTo(x.date)>=0),old=DL.filter(x=>daysTo(x.date)<0);
    document.getElementById('dlList').innerHTML=DL.length?[...up,...old].map(x=>dlItem(x,true)).join(''):'<div class="empty">ما في مواعيد. اضغط "+ إضافة" تحط اختبار أو واجب.</div>';
    document.querySelectorAll('#dlList .del').forEach(b=>b.onclick=()=>{DL=DL.filter(x=>x.id!==b.dataset.id);setJ('deadlines',DL);renderDL()});
    const h=up.slice(0,3);
    document.getElementById('homeDL').innerHTML=h.length?`<div class="sec"><h2>مواعيد قريبة</h2><span class="chipd">${up.length}</span></div><div class="dl" id="hdl">${h.map(x=>dlItem(x,false)).join('')}</div>`:'';
    const hd=document.getElementById('hdl');if(hd)hd.onclick=()=>show('uni');
  }
  document.getElementById('dlSave').onclick=()=>{
    const date=document.getElementById('dlDate').value;if(!date)return;
    DL.push({id:Date.now()+'',type:dlType,course:sel1.value,title:document.getElementById('dlTitle').value.trim(),date});
    setJ('deadlines',DL);document.getElementById('dlTitle').value='';document.getElementById('dlForm').classList.remove('on');renderDL();
  };

  // ---- progress view ----
  const dshort=["أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"];
  function bars(id,lbl,tipId,vals,max,fmtV,color){
    const el=document.getElementById(id);
    el.innerHTML=vals.map((v,i)=>`<div class="b${v==null?' fut':''}" data-i="${i}" style="--c:${color}"><i style="height:${v==null?0:Math.max(v/max*100,v>0?3:0)}%"></i></div>`).join('');
    document.getElementById(lbl).innerHTML=dshort.map((d,i)=>`<span class="${i===today?'tod':''}">${d}</span>`).join('');
    const tip=document.getElementById(tipId);
    el.querySelectorAll('.b').forEach(b=>{const show=()=>{const i=+b.dataset.i,v=vals[i];const r=b.getBoundingClientRect(),pr=el.parentElement.getBoundingClientRect();
      tip.textContent=`${names[i]}: ${v==null?'—':fmtV(v)}`;tip.style.left=(r.left-pr.left+r.width/2)+'px';tip.style.top=(r.top-pr.top+r.height-(b.firstChild.offsetHeight)-4)+'px';tip.style.display='block'};
      b.onmouseenter=show;b.onclick=show;b.onmouseleave=()=>tip.style.display='none'});
  }
  const METRICS={weight:["الوزن","كجم"],waist:["الخصر","سم"],hips:["الورك","سم"],thigh:["الفخذ","سم"],arm:["الذراع","سم"]};
  let GL=getJ('glow',[]),metric='weight';
  function renderProgress(){
    const s=weekStats();
    const cards=[["المهام",s.pct+'<small>%</small>',"var(--peach)"],["أيام الجيم",s.gym+'<small>/4</small>',"var(--green)"],["بيلي دانس",s.dance+'<small>/2</small>',"var(--pink)"],["معدل الماي",s.avgW.toLocaleString('en')+'<small> مل</small>',"var(--blue)"]];
    document.getElementById('stats').innerHTML=cards.map(c=>`<div class="st" style="--c:${c[2]}"><div class="sk"><i></i>${c[0]}</div><div class="sv">${c[1]}</div></div>`).join('');
    const tv=s.W7.map(x=>x.k>TODAY?null:(x.h&&x.h.t?Math.round(x.h.d/x.h.t*100):0));
    const wv=s.W7.map(x=>x.k>TODAY?null:(x.h?x.h.w:0));
    bars('bars1','bl1','tip1',tv,100,v=>v+'%','var(--peach)');
    bars('bars2','bl2','tip2',wv,Math.max(GOAL,...wv.filter(v=>v!=null)),v=>v.toLocaleString('en')+' مل','var(--blue)');
    renderGlow();
  }
  function renderGlow(){
    document.getElementById('mchips').innerHTML=Object.entries(METRICS).map(([k,v])=>`<button class="${k===metric?'on':''}" data-m="${k}">${v[0]}</button>`).join('');
    document.querySelectorAll('#mchips button').forEach(b=>b.onclick=()=>{metric=b.dataset.m;renderGlow()});
    GL.sort((a,b)=>a.date.localeCompare(b.date));
    const pts=GL.filter(x=>x[metric]!=null&&x[metric]!=='');
    const svg=document.getElementById('lsvg'),W=svg.clientWidth||340,H=170,pl=12,pr=36,pt=14,pb=24;
    if(!pts.length){svg.innerHTML=`<text x="${W/2}" y="${H/2}" text-anchor="middle" font-size="13" style="fill:var(--muted)">سجّل أول قياس عشان يطلع الرسم</text>`;document.getElementById('delta').textContent='';}
    else{
      const vs=pts.map(x=>+x[metric]);let mn=Math.min(...vs),mx=Math.max(...vs);if(mn===mx){mn-=1;mx+=1}const padv=(mx-mn)*.15;mn-=padv;mx+=padv;
      const LTR=LANG==='en';const X=i=>pts.length===1?(pl+(W-pl-pr)/2):(LTR?(W-pr)-(pts.length-1-i)*(W-pl-pr)/(pts.length-1):(W-pr)-i*(W-pl-pr)/(pts.length-1)),Y=v=>pt+(1-(v-mn)/(mx-mn))*(H-pt-pb);
      let g='';[0,.5,1].forEach(f=>{const v=mn+(mx-mn)*f,y=Y(v);g+=`<line x1="${pl}" x2="${W-pr}" y1="${y}" y2="${y}" style="stroke:var(--soft)" stroke-width="1"/><text x="${W-pr+6}" y="${y+4}" text-anchor="start" font-size="10" style="fill:var(--muted)">${(mx-mn)<6?v.toFixed(1):v.toFixed(0)}</text>`});
      const d=pts.map((x,i)=>(i?'L':'M')+X(i)+' '+Y(+x[metric])).join(' ');
      g+=`<path d="${d}" fill="none" style="stroke:var(--peach)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>`;
      pts.forEach((x,i)=>{g+=`<circle cx="${X(i)}" cy="${Y(+x[metric])}" r="5" style="fill:var(--peach);stroke:var(--card)" stroke-width="2"/><circle class="hit" data-i="${i}" cx="${X(i)}" cy="${Y(+x[metric])}" r="16" fill="transparent" style="cursor:pointer"/>`});
      const li=pts.length-1;[0,li].filter((v,i,a)=>a.indexOf(v)===i).forEach(i=>{g+=`<text x="${X(i)}" y="${H-6}" text-anchor="middle" font-size="10" style="fill:var(--muted)">${pts[i].date.slice(5)}</text>`});
      svg.innerHTML=g;
      const tip=document.getElementById('tip3');
      svg.querySelectorAll('.hit').forEach(c=>{const sh=()=>{const i=+c.dataset.i;tip.textContent=`${pts[i].date}: ${pts[i][metric]} ${METRICS[metric][1]}`;tip.style.left=(X(i)+16)+'px';tip.style.top=(Y(+pts[i][metric])+38)+'px';tip.style.display='block'};c.onmouseenter=sh;c.onclick=sh;c.onmouseleave=()=>tip.style.display='none'});
      const ch=vs[vs.length-1]-vs[0];
      document.getElementById('delta').innerHTML=pts.length>1?`${METRICS[metric][0]}: <span class="ltr">${ch>0?'+':''}${ch.toFixed(1)}</span> ${METRICS[metric][1]} من أول قياس`:'سجّل قياس ثاني عشان تشوف الفرق';
    }
    document.getElementById('gList').innerHTML=[...GL].reverse().map(x=>`<div class="dli"><div class="ic" style="--c:var(--peach)">${ico('clip')}</div><div class="db"><div class="dt">${x.date}</div><div class="ds">${Object.entries(METRICS).filter(([k])=>x[k]!=null&&x[k]!=='').map(([k,v])=>v[0]+' '+x[k]).join(' · ')}</div></div><button class="del" data-d="${x.date}" aria-label="حذف">${ico('x',2.2)}</button></div>`).join('');
    document.querySelectorAll('#gList .del').forEach(b=>b.onclick=()=>{GL=GL.filter(x=>x.date!==b.dataset.d);setJ('glow',GL);renderGlow()});
  }
  document.getElementById('gDate').value=TODAY;
  document.getElementById('gAdd').onclick=()=>document.getElementById('gForm').classList.toggle('on');
  document.getElementById('gSave').onclick=()=>{
    const date=document.getElementById('gDate').value;if(!date)return;const e={date};let any=false;
    Object.keys(METRICS).forEach(k=>{const v=document.getElementById('g_'+k).value.trim().replace(',','.');if(v!==''&&!isNaN(+v)){e[k]=+v;any=true}});
    if(!any)return;GL=GL.filter(x=>x.date!==date);GL.push(e);setJ('glow',GL);
    Object.keys(METRICS).forEach(k=>document.getElementById('g_'+k).value='');document.getElementById('gForm').classList.remove('on');renderGlow();
  };
  renderDL();

  // ---- water ----
  let GOAL=2500;try{GOAL=+localStorage.getItem('wgoal')||2500}catch(e){}
  const goalEl=document.getElementById('goal');goalEl.value=GOAL;
  goalEl.oninput=()=>{GOAL=+goalEl.value;try{localStorage.setItem('wgoal',GOAL)}catch(e){};renderWater()};
  let wl=load('water');wl.list=wl.list||[];
  let cup=250;try{cup=+localStorage.getItem('cup')||250}catch(e){}
  const cupEl=document.getElementById('cup');cupEl.value=cup;
  function renderWater(){
    const tot=wl.list.reduce((a,b)=>a+b,0),pct=Math.min(tot/GOAL,1);
    document.getElementById('wml').textContent=tot.toLocaleString('en');
    document.getElementById('wsub').textContent=`${wl.list.length} أكواب · الهدف ${GOAL.toLocaleString('en')} مل`+(tot>=GOAL?' ✓':'');
    document.getElementById('cupv').textContent=cup+' مل';document.getElementById('goalv').textContent=GOAL.toLocaleString('en')+' مل';recordDay();
    // wave: y offset from 250 (empty) to 0 (full); drop body spans ~8..236
    const y=236-pct*232;document.getElementById('wv').style.transform=`translateY(${y-14}px)`;
    const n=Math.max(Math.ceil(GOAL/cup),wl.list.length);
    document.getElementById('wcups').innerHTML=Array.from({length:Math.min(n,20)},(_,i)=>`<i class="${i<wl.list.length?'f':''}"></i>`).join('');
  }
  const saveW=()=>store('water',wl);
  document.getElementById('drop').onclick=()=>{wl.list.push(cup);saveW();renderWater();
    const f=document.createElement('div');f.className='fl';f.textContent='+'+cup;document.getElementById('drop').appendChild(f);setTimeout(()=>f.remove(),900);};
  cupEl.oninput=()=>{cup=+cupEl.value;try{localStorage.setItem('cup',cup)}catch(e){};renderWater()};
  document.getElementById('wminus').onclick=()=>{wl.list.pop();saveW();renderWater()};
  document.getElementById('wreset').onclick=()=>{wl.list=[];saveW();renderWater()};
  renderWater();

  // ---- hair oil timer ----
  const OIL_MS=2*60*60*1000;
  let oilStart=null;try{oilStart=+localStorage.getItem('oilStart')||null}catch(e){}
  const hms=ms=>{ms=Math.max(0,ms);const h=Math.floor(ms/36e5),m=Math.floor(ms%36e5/6e4),s=Math.floor(ms%6e4/1e3);return h+':'+String(m).padStart(2,'0')+':'+String(s).padStart(2,'0')};
  const clock=t=>{const d=new Date(t);let h=d.getHours(),m=d.getMinutes();const ap=h<12?'AM':'PM';h=h%12||12;return h+':'+String(m).padStart(2,'0')+' '+ap};
  function startOil(){oilStart=Date.now();try{localStorage.setItem('oilStart',oilStart)}catch(e){};tickOil()}
  function stopOil(){oilStart=null;try{localStorage.removeItem('oilStart')}catch(e){};tickOil()}
  function tickOil(){
    document.querySelectorAll('[data-oilcard]').forEach(c=>{
      const always=c.hasAttribute('data-always'),run=!!oilStart,left=run?oilStart+OIL_MS-Date.now():OIL_MS,fin=run&&left<=0;
      c.classList.toggle('on',always||run);c.classList.toggle('fin',fin);
      c.querySelector('[data-oico]').innerHTML=ico('timer');
      c.querySelector('[data-otime]').textContent=fin?'0:00:00':hms(left);
      c.querySelector('[data-obar]').style.width=(run?Math.min(1,(Date.now()-oilStart)/OIL_MS)*100:0)+'%';
      c.querySelector('[data-osub]').innerHTML=!run?'ساعتين قبل الشاور':fin?'خلص الوقت! روح اتسبح واغسل الزيت':'تغسله الساعة <span class="ltr">'+clock(oilStart+OIL_MS)+'</span>';
      const a=c.querySelector('[data-oacts]');
      const want=!run?'start':fin?'fin':'run';
      if(a.dataset.st!==want){a.dataset.st=want;
        a.innerHTML=want==='start'?'<button class="pr" data-a="go">ابدأ</button>':want==='fin'?'<button class="pr" data-a="stop">تم ✓</button>':'<button data-a="stop">إلغاء</button><button data-a="go">من جديد</button>';
        a.querySelectorAll('button').forEach(b=>b.onclick=e=>{e.stopPropagation();b.dataset.a==='go'?startOil():stopOil()});}
    });
  }
  setInterval(tickOil,1000);tickOil();

  // ---- AI assistant ----
  function renderAll(){renderHome();renderCare();renderWk();renderUni();fillCourses();renderDL();renderWater();recordDay();}
  document.getElementById('aiico').innerHTML=ico('spark');document.getElementById('aihico').innerHTML=ico('spark');
  document.getElementById('aiarr').innerHTML=ico('arrow',2);document.getElementById('aisend').innerHTML=ico('send',2);
  document.getElementById('aitile').onclick=()=>{show('ai');try{history.replaceState(null,'','#ai')}catch(e){}};
  const SUGG=["سوّ لي جدول يومي: صحيان 7 الصبح ونوم 11 بالليل","ضيف جيم الأحد والثلاثاء والخميس الساعة 5","ضيف اختبار يوم 20 نوفمبر","خل هدف الماي 3 لتر","ضيف مهمة قراءة كل يوم الساعة 9 بالليل"];
  const SUGG2=LANG==='en'?["Make me a daily routine: wake up at 7 AM, sleep at 11 PM","Add gym on Sunday, Tuesday and Thursday at 5 PM","Add an exam on Nov 20","Set my water goal to 3 liters","Add a reading task every day at 9 PM"]:SUGG;
  document.getElementById('sugg').innerHTML=SUGG2.map(t=>`<button>${bidi(t)}</button>`).join('');
  document.querySelectorAll('#sugg button').forEach(b=>b.onclick=()=>{document.getElementById('aiin').value=b.textContent;sendAI()});
  const ICONS=Object.keys(I).filter(k=>!['arrow','x','send','check','flag'].includes(k));
  const snap=()=>JSON.stringify({care:CARE,workouts:W,courses:C,classes:U,days:DAYS,deadlines:DL,waterGoal:GOAL});
  const UNDO=[];
  function restore(js){const o=JSON.parse(js);applyCfg(o);saveCfg();DL=o.deadlines;setJ('deadlines',DL);GOAL=o.waterGoal;try{localStorage.setItem('wgoal',GOAL)}catch(e){};goalEl.value=GOAL;renderAll()}
  const isT=t=>typeof t==='string'&&/^\d{1,2}:\d\d$/.test(t);
  function validate(k,v){
    const bad=m=>{throw new Error(k+': '+m)};
    if(k==='days'){if(!Array.isArray(v)||v.length!==7)bad('must be array of 7');v.forEach((a,d)=>{if(!Array.isArray(a))bad('day '+d+' not array');a.forEach(e=>{if(!e||!isT(e.t))bad('bad time in day '+d);if(!CAT[e.k])bad('bad k "'+e.k+'"');if(typeof e.title!=='string'||!e.title)bad('missing title');if(e.i&&!I[e.i])delete e.i})})}
    else if(k==='care'){if(!Array.isArray(v)||v.length!==7)bad('must be array of 7');v.forEach(c=>{if(!c||!['mix','rest','shampoo'].includes(c.type))bad('bad type');if(typeof c.wash!=='string'||typeof c.cream!=='string')bad('wash/cream required')})}
    else if(k==='workouts'){for(let d=0;d<7;d++){const w=v[d]??v[String(d)];if(!w)bad('missing day '+d);if(!w.rest&&typeof w.t!=='string')bad('day '+d+' needs t');if(w.ex&&!Array.isArray(w.ex))bad('ex must be array')}}
    else if(k==='courses'){if(typeof v!=='object'||Array.isArray(v))bad('must be object');Object.values(v).forEach(c=>{if(!Array.isArray(c)||typeof c[0]!=='string')bad('each course is [name,color]');if(!/^var\(--(blue|green|pink|peach|yellow|life)\)$/.test(c[1]||''))c[1]='var(--blue)'})}
    else if(k==='classes'){for(let d=0;d<7;d++){const a=v[d]??v[String(d)];if(a===undefined)bad('missing day '+d);if(a!==null&&!Array.isArray(a))bad('day '+d+' must be array or null');(a||[]).forEach(c=>{if(!Array.isArray(c)||!isT(c[0])||!isT(c[1]))bad('class is [start,end,courseKey]')})}}
    else if(k==='deadlines'){if(!Array.isArray(v))bad('must be array');v.forEach(x=>{if(!DLT[x.type])bad('type must be exam|hw|proj');if(!/^\d{4}-\d\d-\d\d$/.test(x.date||''))bad('date YYYY-MM-DD');x.id=x.id||(Date.now()+Math.random()+'');x.title=x.title||'';x.course=x.course||'other'})}
    else if(k==='waterGoal'){if(typeof v!=='number'||v<500||v>8000)bad('500-8000 ml')}
    return v;
  }
  let savedThisTurn=false;
  const tools=[
    {name:'read_data',description:'Read the full current schedule data. Call this before making any change.',inputSchema:{type:'object',properties:{}},
     execute:()=>JSON.parse(JSON.stringify({today:today,todayName:names[today],todayDate:TODAY,days:DAYS,care:CARE,workouts:W,courses:C,classes:U,deadlines:DL,waterGoal:GOAL,icons:ICONS}))},
    {name:'save_data',description:'Save changes. Pass only the top-level keys you changed, each with its COMPLETE new value (not a diff).',
     inputSchema:{type:'object',properties:{days:{type:'array'},care:{type:'array'},workouts:{type:'object'},courses:{type:'object'},classes:{type:'object'},deadlines:{type:'array'},waterGoal:{type:'number'}}},
     execute:(inp)=>{const keys=Object.keys(inp||{}).filter(k=>['days','care','workouts','courses','classes','deadlines','waterGoal'].includes(k));
       if(!keys.length)throw new Error('nothing to save');
       const v={};keys.forEach(k=>v[k]=validate(k,JSON.parse(JSON.stringify(inp[k]))));
       UNDO.push(snap());
       if(v.days)DAYS=v.days;if(v.care)CARE=v.care;if(v.workouts)W=v.workouts;if(v.courses)C=v.courses;if(v.classes)U=v.classes;saveCfg();
       if(v.deadlines){DL=v.deadlines;setJ('deadlines',DL)}
       if(v.waterGoal){GOAL=v.waterGoal;try{localStorage.setItem('wgoal',GOAL)}catch(e){};goalEl.value=GOAL}
       renderAll();savedThisTurn=true;return {ok:true,saved:keys}}}
  ];
  const SYS=`You are the assistant inside the user's personal "glow up" weekly-routine page. You can read and change their schedule with the tools.

LANGUAGE: Always reply in the same language as the user's latest message. If they write in English, reply in English. If they write in Arabic, reply in Gulf Arabic. Write new titles in that same language too (exercise and course names can stay in English).

DATA MODEL (weekday index: 0=Sunday(الأحد) … 6=Saturday(السبت)):
- days[0..6]: arrays of events {t:"HH:MM" 24h, k:category, title, sub?, i?:icon, oil?:true}. k is one of: uni, gym, dance, care, study, life. i is an optional icon name from the "icons" list (if omitted the category icon is used). oil:true marks a hair-oil step and shows a 2-hour timer button. University lectures are NOT in days: they are generated from classes+courses.
- care[0..6]: hair/body routine {type:"mix"(hair oil day)|"rest"|"shampoo", what?, wash, cream}.
- workouts{"0".."6"}: {t:"Leg Day", sub:"Arabic description", ex:[["Exercise name","4×8","each leg"?]]} or {t,sub,dance:true} or {rest:true}.
- courses{key:[name, color]} color is one of var(--blue) var(--green) var(--pink) var(--peach) var(--yellow).
- classes{"0".."6"}: array of [start "HH:MM", end "H:MM", courseKey], or null on weekend days (Fri/Sat).
- deadlines: [{id,type:"exam"|"hw"|"proj",course:courseKey|"other",title,date:"YYYY-MM-DD"}].
- waterGoal: daily water goal in ml.

RULES:
1. Always call read_data first, then save_data once with only the keys you changed, each as its complete new value.
2. Keep related data consistent: e.g. if a workout's name or day changes, update the matching gym event in days too; if the hair routine changes, update the care events and the shower "sub" text in days; if the dance time changes, update days.
3. Keep titles short. Use 24h "HH:MM" for t. Interpret times like "5" or "الساعة 9 بالليل" sensibly (afternoon/evening for gym, study, etc.).
4. If the request is ambiguous in a way that matters, ask one short question instead of guessing. If the user only asks a question, answer without saving.
5. After saving, reply in the user's language in 1–3 short sentences saying exactly what you changed. No markdown, no lists unless needed.
6. If the schedule is empty and the user asks you to build one, create a sensible starter routine from what they tell you.
Today is ${names[today]} ${TODAY}.`;
  let HISTORY=[],busy=false;
  const chat=document.getElementById('chat'),inp=document.getElementById('aiin'),sendB=document.getElementById('aisend');
  function bubble(cls,text){const d=document.createElement('div');d.className='msg '+cls;d.textContent=text;chat.appendChild(d);d.scrollIntoView({block:'end',behavior:'smooth'});return d}
  inp.oninput=()=>{inp.style.height='auto';inp.style.height=Math.min(inp.scrollHeight,110)+'px'};
  inp.onkeydown=e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendAI()}};
  sendB.onclick=()=>sendAI();
  let samplerP=null;
  async function getSampler(){if(!samplerP)samplerP=(window.claude&&claude.use)?claude.use('sample'):Promise.resolve(window.gloAI?geminiSample:null);return samplerP}
  // Gemini via the glo-ai Appwrite Function. Same contract as the Claude sampler:
  // runs the tool loop here in the page and resolves to {text}.
  async function geminiSample(msgs,{tools}){
    const decl=tools.map(t=>({name:t.name,description:t.description,parameters:t.inputSchema}));
    const contents=msgs.map(m=>({role:m.role==='assistant'?'model':'user',parts:[{text:m.content}]}));
    for(let step=0;step<8;step++){
      const c=await window.gloAI({contents,tools:decl});
      const parts=(c&&c.parts)||[];
      const calls=parts.filter(p=>p.functionCall);
      if(!calls.length)return {text:parts.filter(p=>p.text&&!p.thought).map(p=>p.text).join('').trim()};
      contents.push({role:'model',parts});
      const out=[];
      for(const p of calls){
        const fc=p.functionCall,tool=tools.find(x=>x.name===fc.name);let result;
        try{result=tool?await tool.execute(fc.args||{}):{error:'unknown tool '+fc.name}}catch(e){result={error:String(e&&e.message||e)}}
        out.push({functionResponse:{...(fc.id?{id:fc.id}:{}),name:fc.name,response:{result}}});
      }
      contents.push({role:'user',parts:out});
    }
    return {text:''};
  }
  async function sendAI(){
    const q=inp.value.trim();if(!q||busy)return;
    document.getElementById('aihero').style.display='none';
    inp.value='';inp.style.height='auto';bubble('u',q);
    const sample=await getSampler();
    const EN=LANG==='en',L2=(ar,en)=>EN?en:ar;
    if(!sample){bubble('a err',L2('المساعد مو مفعّل في هالنسخة للحين.','The assistant isn\'t available in this version yet.'));return}
    busy=true;sendB.disabled=true;savedThisTurn=false;
    // Playful "thinking" words that rotate until the reply arrives.
    const THINK=EN?['Thinking…','Cooking…','Brewing…','Planning…','Stretching…','Hydrating…','Glowing up…','Almost there…']
                  :['قاعد أفكر…','قاعد أطبخ…','قاعد أرتّب…','أخطط لك…','أسخّن…','أشرب ماي…','لحظة…','قربت…'];
    let ti=Math.floor(Math.random()*THINK.length);
    const a=bubble('a think',THINK[ti]);
    const spin=setInterval(()=>{if(a.classList.contains('think'))a.textContent=THINK[ti=(ti+1)%THINK.length]},1400);
    HISTORY.push({role:'user',content:q});
    // Pick the reply language from the message itself (fall back to the app's language for things like "ok" or "👍").
    const hasAr=/[؀-ۿ]/.test(q),hasEn=/[A-Za-z]/.test(q);
    const replyLang=hasAr&&!hasEn?'Arabic (Gulf dialect)':hasEn&&!hasAr?'English':(LANG==='en'?'English':'Arabic (Gulf dialect)');
    const last=HISTORY.length-1;
    const msgs=HISTORY.map((m,i)=>{let c=m.content;if(i===0)c=SYS+'\n\nUser request:\n'+c;if(i===last)c+=`\n\n[Reply in ${replyLang}.]`;return i===0||i===last?{role:'user',content:c}:m});
    try{
      const r=await sample(msgs,{tools,cache:false,onText:({text})=>{a.classList.remove('think');a.textContent=text;}});
      const txt=(r&&r.text)||L2('تم.','Done.');a.classList.remove('think');a.textContent=txt;
      HISTORY.push({role:'assistant',content:txt});
      if(savedThisTurn){const s=document.createElement('div');s.className='saved';s.innerHTML=`<span>${ico('check',2.5).replace('<svg','<svg width="14" height="14"')} انحفظ التعديل</span><button>تراجع</button>`;
        const n=UNDO.length;s.querySelector('button').onclick=()=>{if(UNDO.length){restore(UNDO.pop());s.querySelector('span').textContent='رجّعت مثل ما كان';s.querySelector('button').remove();HISTORY.push({role:'user',content:'(I pressed undo; the last change was reverted.)'},{role:'assistant',content:'تمام، رجّعته.'})}};
        chat.appendChild(s);s.scrollIntoView({block:'end'})}
    }catch(e){
      HISTORY.pop();a.className='msg a err';
      a.textContent=e&&e.code==='not_granted'?L2('ما عطيت الصفحة إذن تستخدم المساعد.','The page doesn\'t have permission to use the assistant.'):e&&e.code==='rate_limited'?L2('كثرت الطلبات، جرّب بعد شوي.','Too many requests, try again in a bit.'):L2('صار خطأ، جرّب مرة ثانية.','Something went wrong, try again.');
    }finally{clearInterval(spin);busy=false;sendB.disabled=false}
  }

  // ---- manual editing ----
  const shade=document.getElementById('shade');
  document.getElementById('shX').innerHTML=ico('x',2.2);
  const closeSheet=()=>shade.classList.remove('on');
  document.getElementById('shX').onclick=closeSheet;
  shade.onclick=e=>{if(e.target===shade)closeSheet()};
  function openSheet(title,body,{onSave,onDelete,saveTxt='حفظ'}={}){
    document.getElementById('shT').textContent=title;
    const B=document.getElementById('shB');B.innerHTML=body;
    const F=document.getElementById('shF');F.innerHTML=(onDelete?'<button class="dl2">حذف</button>':'')+`<button class="sv">${saveTxt}</button>`;
    F.querySelector('.sv').onclick=()=>{if(onSave(B)!==false){commit();closeSheet()}};
    if(onDelete){const db=F.querySelector('.dl2');db.onclick=()=>{if(db.dataset.sure){onDelete();commit();closeSheet()}else{db.dataset.sure=1;db.textContent='متأكد؟ اضغط مرة ثانية'}}}
    shade.classList.add('on');B.scrollTop=0;return B;
  }
  function commit(){if(typeof UNDO!=='undefined'&&window.__pre)UNDO.push(window.__pre);saveCfg();renderAll()}
  const snapPre=()=>{try{window.__pre=snap()}catch(e){window.__pre=null}};
  const fv=(B,id)=>B.querySelector('#'+id).value.trim();
  const dayChips=(on)=>`<div class="dchips" id="fDays">${dshort.map((n,d)=>`<button type="button" data-d="${d}" class="${on.includes(d)?'on':''}">${n}</button>`).join('')}</div>`;
  const wireChips=(B,multi=true)=>B.querySelectorAll('.dchips button').forEach(b=>b.onclick=()=>{if(!multi)B.querySelectorAll('.dchips button').forEach(x=>x.classList.remove('on'));b.classList.toggle('on')});
  const segH=(id,opts,cur)=>`<div class="seg2" id="${id}">${opts.map(([v,n])=>`<button type="button" data-v="${v}" class="${v===cur?'on':''}">${n}</button>`).join('')}</div>`;
  const wireSeg=(B,id,cb)=>B.querySelectorAll('#'+id+' button').forEach(b=>b.onclick=()=>{B.querySelectorAll('#'+id+' button').forEach(x=>x.classList.toggle('on',x===b));cb&&cb(b.dataset.v)});
  const segV=(B,id)=>B.querySelector('#'+id+' button.on').dataset.v;
  const EICONS=Object.keys(I).filter(k=>!['arrow','x','send','check','flag'].includes(k));

  // events
  function editEvent(d,ix){
    const isNew=ix===undefined||isNaN(ix);const e=isNew?{t:'20:00',k:'life',title:'',sub:''}:DAYS[d][ix];
    snapPre();
    let icon=e.i||'';
    const B=openSheet(isNew?'مهمة جديدة':'تعديل المهمة',`
      <label class="fld"><span>اسم المهمة</span><input id="fT" value="${hEsc(e.title)}" placeholder="مثلاً: قراءة"></label>
      <label class="fld"><span>تفاصيل (اختياري)</span><input id="fS" value="${hEsc(e.sub||'')}"></label>
      <div class="row2"><label class="fld"><span>الوقت</span><input type="time" id="fH" value="${pad2(e.t)}"></label>
      <label class="fld"><span>القسم</span><select id="fK">${Object.entries(CAT).filter(([k])=>k!=='uni').map(([k,c])=>`<option value="${k}" ${k===e.k?'selected':''}>${c.n}</option>`).join('')}</select></label></div>
      <div class="fld"><span>الأيقونة</span><div class="icgrid" id="fI">${EICONS.map(n=>`<button type="button" data-n="${n}" class="${n===icon?'on':''}">${ico(n)}</button>`).join('')}</div></div>
      <label class="chkl"><input type="checkbox" id="fO" ${e.oil?'checked':''}> زر تايمر زيت الشعر (ساعتين)</label>
      <div class="fld"><span>${isNew?'الأيام':'انسخها بعد لأيام ثانية (اختياري)'}</span>${dayChips(isNew?[d]:[])}</div>`,
      {onSave:B=>{const t=fv(B,'fT');if(!t){alertField(B,'fT');return false}
        const o={t:B.querySelector('#fH').value||'20:00',k:B.querySelector('#fK').value,title:t};const sub=fv(B,'fS');if(sub)o.sub=sub;if(icon)o.i=icon;if(B.querySelector('#fO').checked)o.oil=true;
        const ds=[...B.querySelectorAll('#fDays button.on')].map(b=>+b.dataset.d);
        if(isNew){if(!ds.length)ds.push(d);ds.forEach(x=>DAYS[x].push({...o}))}else{DAYS[d][ix]=o;ds.filter(x=>x!==d).forEach(x=>DAYS[x].push({...o}))}},
       onDelete:isNew?null:()=>{DAYS[d].splice(ix,1)}});
    wireChips(B);
    B.querySelectorAll('#fI button').forEach(b=>b.onclick=()=>{icon=icon===b.dataset.n?'':b.dataset.n;B.querySelectorAll('#fI button').forEach(x=>x.classList.toggle('on',x.dataset.n===icon))});
  }
  function alertField(B,id){const el=B.querySelector('#'+id);el.style.boxShadow='0 0 0 2px #E5484D';el.focus()}
  const edT=document.getElementById('edT'),addEv=document.getElementById('addEv');
  edT.onclick=()=>{EDIT=!EDIT;edT.textContent=EDIT?'خلصت':'تعديل';addEv.style.display=EDIT?'block':'none';renderHome()};
  addEv.onclick=()=>editEvent(sel);

  // workouts
  function syncWorkoutEvent(d){
    const w=W[d],a=DAYS[d];const gi=a.findIndex(e=>e.k==='gym'),di=a.findIndex(e=>e.k==='dance');
    if(w.rest){DAYS[d]=a.filter(e=>e.k!=='gym'&&e.k!=='dance');return}
    if(w.dance){if(gi>=0)a.splice(gi,1);const i2=a.findIndex(e=>e.k==='dance');if(i2>=0){a[i2].title=w.t}else a.push({t:'16:30',k:'dance',title:w.t});return}
    if(di>=0)a.splice(di,1);const i3=a.findIndex(e=>e.k==='gym');if(i3>=0){a[i3].title=w.t;a[i3].sub=w.sub}else a.push({t:'16:30',k:'gym',title:w.t,sub:w.sub});
  }
  function editWorkout(d){
    snapPre();const w=JSON.parse(JSON.stringify(W[d]||{rest:true}));let ty=w.rest?'rest':w.dance?'dance':'gym';
    const exRow=(r=['','',''])=>`<div class="exr"><input class="n" value="${hEsc(r[0])}" placeholder="Exercise"><input class="s" value="${hEsc(r[1]||'')}" placeholder="3×12"><button type="button" class="del">${ico('x',2.2)}</button><input class="note" value="${hEsc(r[2]||'')}" placeholder="note (each leg…)"></div>`;
    const B=openSheet('تمرين يوم '+names[d],`
      ${segH('fTy',[['gym','جيم'],['dance','دانس'],['rest','راحة']],ty)}
      <div id="fBody">
        <div class="row2"><label class="fld"><span>الاسم</span><input id="fT" dir="ltr" value="${hEsc(w.t||'')}" placeholder="Leg Day"></label><label class="fld"><span>الوصف</span><input id="fS" value="${hEsc(w.sub||'')}"></label></div>
        <div class="fld" id="fExW"><span>التمارين</span><div id="fEx" style="display:flex;flex-direction:column;gap:6px">${(w.ex||[]).map(exRow).join('')}</div><button type="button" class="addrow" id="fAdd" style="margin-top:6px">+ تمرين</button></div>
      </div>`,
      {onSave:B=>{ty=segV(B,'fTy');let n;
        if(ty==='rest')n={rest:true};
        else{n={t:fv(B,'fT')||(ty==='dance'?'Belly Dance':'Workout'),sub:fv(B,'fS')};if(ty==='dance')n.dance=true;
          else n.ex=[...B.querySelectorAll('.exr')].map(r=>{const a=[r.querySelector('.n').value.trim(),r.querySelector('.s').value.trim()];const no=r.querySelector('.note').value.trim();if(no)a.push(no);return a}).filter(a=>a[0])}
        W[d]=n;syncWorkoutEvent(d)}});
    const upd=v=>{B.querySelector('#fBody').style.display=v==='rest'?'none':'';B.querySelector('#fExW').style.display=v==='gym'?'':'none'};
    wireSeg(B,'fTy',upd);upd(ty);
    const wireDel=()=>B.querySelectorAll('.exr .del').forEach(b=>b.onclick=()=>b.closest('.exr').remove());wireDel();
    B.querySelector('#fAdd').onclick=()=>{B.querySelector('#fEx').insertAdjacentHTML('beforeend',exRow());wireDel();B.querySelector('#fEx').lastElementChild.querySelector('.n').focus()};
  }

  // care
  function syncCareEvents(d){
    const c=CARE[d];const sh=c.type==='rest'?'بدون شامبو':(c.type==='shampoo'?'نيزورال للشعر':'اغسل زيت الشعر');
    DAYS[d].forEach(e=>{if(e.k==='care'&&e.title==='شاور')e.sub=`${sh} · ${c.wash} · بعدين ${c.cream}`;if(e.k==='care'&&e.oil&&c.what)e.title='حط '+c.what});
  }
  function editCare(d){
    snapPre();const c=CARE[d];
    const B=openSheet('العناية يوم '+names[d],`
      <div class="fld"><span>الشعر</span>${segH('fTy',[['mix','زيت الشعر'],['shampoo','شامبو'],['rest','راحة']],c.type)}</div>
      <label class="fld" id="fWw"><span>وش تسوي</span><input id="fW" value="${hEsc(c.what||'')}" placeholder="زيت الشعر · تركيبة ١"></label>
      <label class="fld"><span>الغسول</span><input id="fWa" value="${hEsc(c.wash)}"></label>
      <label class="fld"><span>الكريم بعد الاستحمام</span><input id="fCr" value="${hEsc(c.cream)}"></label>`,
      {onSave:B=>{const ty=segV(B,'fTy');const n={type:ty,wash:fv(B,'fWa'),cream:fv(B,'fCr')};if(ty!=='rest')n.what=fv(B,'fW')||(ty==='shampoo'?'غسيل بالشامبو':'زيت الشعر');CARE[d]=n;syncCareEvents(d)}});
    const upd=v=>B.querySelector('#fWw').style.display=v==='rest'?'none':'';wireSeg(B,'fTy',upd);upd(c.type);
  }

  // classes & courses
  function editClasses(d){
    snapPre();const L=JSON.parse(JSON.stringify(U[d]||[]));
    const opts=k=>Object.entries(C).map(([kk,v])=>`<option value="${kk}" ${kk===k?'selected':''}>${hEsc(v[0])}</option>`).join('');
    const row=(c=[ '10:00','11:50',Object.keys(C)[0]])=>`<div class="clr"><select class="c">${opts(c[2])}</select><button type="button" class="del pen" style="margin:0">${ico('x',2.2)}</button><input type="time" class="s" value="${pad2(c[0])}"><input type="time" class="e" value="${pad2(c[1])}"></div>`;
    const B=openSheet('محاضرات يوم '+names[d],`
      <label class="chkl"><input type="checkbox" id="fWk" ${U[d]===null?'checked':''}> ويكند (إجازة)</label>
      <div id="fCl" style="display:flex;flex-direction:column;gap:6px">${L.map(row).join('')}</div>
      <button type="button" class="addrow" id="fAdd">+ محاضرة</button>`,
      {onSave:B=>{if(B.querySelector('#fWk').checked){U[d]=null;return}
        U[d]=[...B.querySelectorAll('.clr')].map(r=>[r.querySelector('.s').value,r.querySelector('.e').value,r.querySelector('.c').value]).filter(x=>x[0]&&x[1]&&C[x[2]]).sort((a,b)=>a[0].localeCompare(b[0]))}});
    const wd=()=>B.querySelectorAll('.clr .del').forEach(b=>b.onclick=()=>b.closest('.clr').remove());wd();
    B.querySelector('#fAdd').onclick=()=>{if(!Object.keys(C).length){B.querySelector('#fAdd').textContent='ضيف مادة أول من زر "المواد"';return}B.querySelector('#fCl').insertAdjacentHTML('beforeend',row());wd()};
  }
  const COLS=['var(--blue)','var(--green)','var(--pink)','var(--peach)','var(--yellow)'];
  function editCourses(){
    snapPre();
    const row=(k,v)=>`<div class="crow" data-k="${k}"><div class="top2"><input class="n" value="${hEsc(v[0])}" placeholder="Course name"><button type="button" class="del pen" style="margin:0">${ico('x',2.2)}</button></div><div class="cdots">${COLS.map(c=>`<button type="button" data-c="${c}" style="background:${c}" class="${c===v[1]?'on':''}"></button>`).join('')}</div></div>`;
    const B=openSheet('المواد',`<div id="fCo" style="display:flex;flex-direction:column;gap:8px">${Object.entries(C).map(([k,v])=>row(k,v)).join('')}</div><button type="button" class="addrow" id="fAdd">+ مادة</button>`,
      {onSave:B=>{const n={};B.querySelectorAll('.crow').forEach(r=>{const nm=r.querySelector('.n').value.trim();if(!nm)return;const on=r.querySelector('.cdots button.on');n[r.dataset.k]=[nm,on?on.dataset.c:'var(--blue)']});
        C=n;for(let d=0;d<7;d++)if(U[d])U[d]=U[d].filter(x=>C[x[2]])}});
    const wire=()=>{B.querySelectorAll('.crow .del').forEach(b=>b.onclick=()=>b.closest('.crow').remove());B.querySelectorAll('.crow').forEach(r=>r.querySelectorAll('.cdots button').forEach(b=>b.onclick=()=>r.querySelectorAll('.cdots button').forEach(x=>x.classList.toggle('on',x===b))))};wire();
    B.querySelector('#fAdd').onclick=()=>{B.querySelector('#fCo').insertAdjacentHTML('beforeend',row('c'+Date.now(),['',COLS[Object.keys(C).length%5]]));wire();B.querySelector('#fCo').lastElementChild.querySelector('.n').focus()};
  }
  document.getElementById('edCourses').onclick=editCourses;

  // pencils on cards
  function addPencils(id,fn){document.querySelectorAll('#'+id+' > .card').forEach((c,d)=>{const h=c.querySelector('.ch');if(!h||h.querySelector('.pen'))return;const b=document.createElement('button');b.className='pen';b.innerHTML=ico('pencil',2);b.onclick=e=>{e.stopPropagation();fn(d)};h.appendChild(b)})}
  const _rc=renderCare;renderCare=function(){_rc();addPencils('careCards',editCare)};
  const _rw=renderWk;renderWk=function(){_rw();addPencils('wkCards',editWorkout)};
  const _ru=renderUni;renderUni=function(){_ru();addPencils('uniCards',editClasses)};
  renderCare();renderWk();renderUni();
  renderHome();
  setTimeout(()=>trNode(document.body),0);
  const start=()=>{const x=location.hash.slice(1);show(TITLES[x]?x:'cal')};
  window.addEventListener('hashchange',start);start();

}
(function(){
  const ENDPOINT='https://fra.cloud.appwrite.io/v1',PROJECT='6af2d6960028f0cca8e9';
  const KEYS=['cfg','hist','wlog','glow','deadlines','wgoal','cup','theme','palette','lang','evdone','wkdone','water','oilStart','onboarded'];
  const LS=window.localStorage,origSet=Storage.prototype.setItem,origRem=Storage.prototype.removeItem;
  const lsGet=k=>{try{return LS.getItem(k)}catch(e){return null}};
  const lsSet=(k,v)=>{try{origSet.call(LS,k,v)}catch(e){}};
  const T={
    ar:{tag:'عاداتك، روتينك، وتقدّمك في مكان واحد',login:'تسجيل الدخول',welcome:'أهلاً من جديد',register:'حساب جديد',regSub:'سوّ حسابك وبياناتك تنحفظ وتوصلها من أي جهاز',name:'اسمك',email:'الإيميل',pass:'الباسورد',noAcc:'ما عندك حساب؟ <b>سجّل</b>',haveAcc:'عندك حساب؟ <b>ادخل</b>',
      e_inv:'الإيميل أو الباسورد غلط',e_exists:'فيه حساب بهالإيميل، جرّب تسجل دخول',e_pass:'الباسورد لازم 8 أحرف أو أكثر',e_net:'ما قدرت أوصل للسيرفر. تأكد من الإنترنت',e_gen:'صار خطأ، جرّب مرة ثانية',e_fill:'عبّ كل الخانات',
      lang:'اختار اللغة',langSub:'تقدر تغيرها بعدين من الدائرة اللي فوق',theme:'اختار الثيم',themeSub:'الوضع والألوان',light:'فاتح',dark:'داكن',water:'كم تبي تشرب ماي؟',waterSub:'هدفك اليومي وحجم الكوب اللي تشرب فيه',goal:'الهدف اليومي',cup:'حجم الكوب',ml:'مل',cups:'أكواب تقريباً',next:'التالي',back:'رجوع',start:'يلا نبدأ',hi:'أهلاً'},
    en:{tag:'Your habits, routine and progress in one place',login:'Log in',welcome:'Welcome back',register:'Create account',regSub:'Create an account so your data is saved and synced across devices',name:'Your name',email:'Email',pass:'Password',noAcc:'No account? <b>Sign up</b>',haveAcc:'Have an account? <b>Log in</b>',
      e_inv:'Wrong email or password',e_exists:'An account with this email already exists — try logging in',e_pass:'Password must be at least 8 characters',e_net:"Couldn't reach the server. Check your connection",e_gen:'Something went wrong, try again',e_fill:'Fill in all fields',
      lang:'Choose your language',langSub:'You can change it later from the circle at the top',theme:'Pick a theme',themeSub:'Mode and colors',light:'Light',dark:'Dark',water:'How much water?',waterSub:'Your daily goal and the size of your glass',goal:'Daily goal',cup:'Glass size',ml:'ml',cups:'glasses approx.',next:'Next',back:'Back',start:"Let's go",hi:'Hi'}
  };
  let L=lsGet('lang')==='en'?'en':(lsGet('lang')==='ar'?'ar':((navigator.language||'').startsWith('ar')?'ar':'ar'));
  const t=k=>T[L][k];
  const setDir=()=>{document.documentElement.lang=L;document.documentElement.dir=L==='en'?'ltr':'rtl'};
  const $=id=>document.getElementById(id),V=$('gview');
  const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

  // theme preview (same palettes as the app)
  function paint(pal,mode){
    document.documentElement.dataset.theme=mode;
    const base=THEMES[pal]||THEMES.cool;const c=mode==='dark'?{...base,...DARKS[pal],heart:DARKS[pal].acc,lred:DARKS[pal].acc}:base;
    Object.entries(c).forEach(([a,v])=>{if(a!=='n')document.documentElement.style.setProperty('--'+a,v)});
  }
  const pal0=lsGet('palette')||'cool',mode0=lsGet('theme')||((matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light');
  paint(pal0,mode0);setDir();

  if(!window.Appwrite){V.innerHTML=`<div class="gcard"><p>${t('e_net')}</p></div>`;$('gtag').textContent=t('tag');return}
  const client=new Appwrite.Client().setEndpoint(ENDPOINT).setProject(PROJECT);
  const account=new Appwrite.Account(client);
  // AI assistant: calls the glo-ai Appwrite Function (Gemini). Function ID must match the Console.
  const AI_FUNCTION='glo-ai',functions=new Appwrite.Functions(client);
  window.gloAI=async payload=>{
    const ex=await functions.createExecution({functionId:AI_FUNCTION,body:JSON.stringify(payload),async:false,method:'POST',headers:{'content-type':'application/json'}});
    let out={};try{out=JSON.parse(ex.responseBody||'{}')}catch(e){}
    if(ex.responseStatusCode>=400||out.error||ex.status==='failed'){const e=new Error(out.error||ex.errors||'ai_failed');e.code=ex.responseStatusCode===429?'rate_limited':'ai_failed';throw e}
    return out.content;
  };
  let USER=null,remoteT=0,pushTimer=null,pushing=false;

  // ---- sync ----
  function collect(){
    const d={};KEYS.forEach(k=>{const v=lsGet(k);if(v!=null)d[k]=v});
    try{const h=JSON.parse(d.hist||'{}');const ks=Object.keys(h).sort();if(ks.length>180){ks.slice(0,ks.length-180).forEach(k=>delete h[k]);d.hist=JSON.stringify(h)}}catch(e){}
    try{const w=JSON.parse(d.wlog||'{}');Object.keys(w).forEach(k=>{if(w[k].length>15)w[k]=w[k].slice(-15)});d.wlog=JSON.stringify(w)}catch(e){}
    return d;
  }
  async function push(){
    if(!USER||pushing)return;pushing=true;
    try{const now=Date.now();await account.updatePrefs({prefs:{glo:collect(),t:now,onb:lsGet('onboarded')==='1'}});remoteT=now;lsSet('_lt',String(now))}
    catch(e){console.warn('sync failed',e)}finally{pushing=false}
  }
  const schedule=()=>{clearTimeout(pushTimer);pushTimer=setTimeout(push,1500)};
  Storage.prototype.setItem=function(k,v){origSet.call(this,k,v);if(this===LS&&KEYS.includes(k)){origSet.call(LS,'_lt',String(Date.now()));schedule()}};
  Storage.prototype.removeItem=function(k){origRem.call(this,k);if(this===LS&&KEYS.includes(k)){origSet.call(LS,'_lt',String(Date.now()));schedule()}};
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'&&pushTimer){clearTimeout(pushTimer);push()}});

  function pull(p){KEYS.forEach(k=>{try{origRem.call(LS,k)}catch(e){}});const g=p.glo||{};Object.keys(g).forEach(k=>{if(KEYS.includes(k))lsSet(k,g[k])});lsSet('_lt',String(p.t||Date.now()))}

  // ---- screens ----
  function errMsg(e){const ty=e&&e.type||'';if(ty.includes('invalid_credentials')||e&&e.code===401)return t('e_inv');if(ty.includes('already_exists')||e&&e.code===409)return t('e_exists');if(ty.includes('password'))return t('e_pass');if(!e||!e.code)return t('e_net');return e.message||t('e_gen')}
  function showLogin(){
    $('gtag').textContent=t('tag');
    V.innerHTML=`<div class="gcard"><h2>${t('welcome')}</h2>
      <input class="gin ltr" id="gE" type="email" autocomplete="email" placeholder="${t('email')}">
      <input class="gin ltr" id="gP" type="password" autocomplete="current-password" placeholder="${t('pass')}">
      <div class="gerr" id="gErr"></div><button class="gbtn" id="gGo">${t('login')}</button>
      <button class="glink" id="gSw">${t('noAcc')}</button>${langSwitch()}</div>`;
    wireLang(showLogin);
    $('gSw').onclick=showRegister;
    const go=async()=>{const em=$('gE').value.trim(),pw=$('gP').value;if(!em||!pw){$('gErr').textContent=t('e_fill');return}
      $('gGo').disabled=true;$('gErr').textContent='';
      try{await login(em,pw);await afterAuth()}catch(e){$('gErr').textContent=errMsg(e);$('gGo').disabled=false}};
    $('gGo').onclick=go;$('gP').onkeydown=e=>{if(e.key==='Enter')go()};
  }
  function showRegister(){
    $('gtag').textContent=t('tag');
    V.innerHTML=`<div class="gcard"><h2>${t('register')}</h2><p>${t('regSub')}</p>
      <input class="gin" id="gN" autocomplete="name" placeholder="${t('name')}">
      <input class="gin ltr" id="gE" type="email" autocomplete="email" placeholder="${t('email')}">
      <input class="gin ltr" id="gP" type="password" autocomplete="new-password" placeholder="${t('pass')}">
      <div class="gerr" id="gErr"></div><button class="gbtn" id="gGo">${t('register')}</button>
      <button class="glink" id="gSw">${t('haveAcc')}</button>${langSwitch()}</div>`;
    wireLang(showRegister);
    $('gSw').onclick=showLogin;
    const go=async()=>{const nm=$('gN').value.trim(),em=$('gE').value.trim(),pw=$('gP').value;
      if(!nm||!em||!pw){$('gErr').textContent=t('e_fill');return}if(pw.length<8){$('gErr').textContent=t('e_pass');return}
      $('gGo').disabled=true;$('gErr').textContent='';
      try{await account.create({userId:Appwrite.ID.unique(),email:em,password:pw,name:nm});await login(em,pw);await afterAuth(true)}
      catch(e){$('gErr').textContent=errMsg(e);$('gGo').disabled=false}};
    $('gGo').onclick=go;$('gP').onkeydown=e=>{if(e.key==='Enter')go()};
  }
  const langSwitch=()=>`<button class="glink" id="gL">${L==='ar'?'English':'العربية'}</button>`;
  const wireLang=re=>{$('gL').onclick=()=>{L=L==='ar'?'en':'ar';lsSet('lang',L);setDir();re()}};
  async function login(em,pw){
    try{await account.createEmailPasswordSession({email:em,password:pw})}
    catch(e){if((e.type||'').includes('session_already_exists')||e.code===409){try{await account.deleteSession({sessionId:'current'})}catch(_){}await account.createEmailPasswordSession({email:em,password:pw})}else throw e}
  }

  // onboarding
  const OB={lang:L,mode:mode0,pal:pal0,goal:+(lsGet('wgoal')||2500),cup:+(lsGet('cup')||250)};
  const dots=n=>{$('gate').classList.add('ob');return `<div class="steps">${[0,1,2].map(i=>`<i class="${i<=n?'on':''}"></i>`).join('')}</div>`};
  function ob1(){
    const first=USER&&USER.name?USER.name.split(' ')[0]:'';
    $('gtag').innerHTML=`<span>${t('hi')}</span>${first?`<b>${esc(first)}</b>`:''}`;
    V.innerHTML=`${dots(0)}<div class="gcard"><h2>${t('lang')}</h2><p>${t('langSub')}</p>
      <div class="bigopt"><button data-l="ar" class="${OB.lang==='ar'?'on':''}">العربية</button><button data-l="en" class="${OB.lang==='en'?'on':''}">English</button></div>
      <button class="gbtn" id="gN1">${t('next')}</button></div>`;
    V.querySelectorAll('.bigopt button').forEach(b=>b.onclick=()=>{OB.lang=L=b.dataset.l;setDir();ob1()});
    $('gN1').onclick=ob2;
  }
  function ob2(){
    V.innerHTML=`${dots(1)}<div class="gcard"><h2>${t('theme')}</h2><p>${t('themeSub')}</p>
      <div class="seg2" id="gMode"><button data-m="light" class="${OB.mode==='light'?'on':''}">${t('light')}</button><button data-m="dark" class="${OB.mode==='dark'?'on':''}">${t('dark')}</button></div>
      <div class="swg">${Object.entries(THEMES).map(([k,v])=>{const c=OB.mode==='dark'?{...v,...DARKS[k]}:v;return `<button data-p="${k}" class="${k===OB.pal?'on':''}"><i style="background:${grad(c)}"></i>${L==='en'?({warm:'Original',cool:'Cool',blue:'Blue',mono:'Grey',olive:'Olive',neon:'Neon',purple:'Purple'})[k]:v.n}</button>`}).join('')}</div>
      <div class="grow"><button class="glink" id="gB">${t('back')}</button><button class="gbtn" id="gN2">${t('next')}</button></div></div>`;
    V.querySelectorAll('#gMode button').forEach(b=>b.onclick=()=>{OB.mode=b.dataset.m;paint(OB.pal,OB.mode);ob2()});
    V.querySelectorAll('.swg button').forEach(b=>b.onclick=()=>{OB.pal=b.dataset.p;paint(OB.pal,OB.mode);ob2()});
    $('gB').onclick=ob1;$('gN2').onclick=ob3;
  }
  function ob3(){
    V.innerHTML=`${dots(2)}<div class="gcard"><h2>${t('water')}</h2><p>${t('waterSub')}</p>
      <div class="gbig" id="gG"></div><div style="text-align:center;font-size:13px;color:var(--muted)" id="gC"></div>
      <div class="rng"><label>${t('goal')} <b id="gGv"></b></label><input type="range" id="gGoal" min="1000" max="5000" step="250" value="${OB.goal}"></div>
      <div class="rng"><label>${t('cup')} <b id="gCv"></b></label><input type="range" id="gCup" min="100" max="1000" step="50" value="${OB.cup}"></div>
      <div class="grow"><button class="glink" id="gB">${t('back')}</button><button class="gbtn" id="gDone">${t('start')}</button></div></div>`;
    const upd=()=>{OB.goal=+$('gGoal').value;OB.cup=+$('gCup').value;$('gG').innerHTML=`${OB.goal.toLocaleString('en')}<small> ${t('ml')}</small>`;$('gGv').textContent=OB.goal.toLocaleString('en')+' '+t('ml');$('gCv').textContent=OB.cup+' '+t('ml');$('gC').textContent='≈ '+Math.ceil(OB.goal/OB.cup)+' '+t('cups')};
    $('gGoal').oninput=upd;$('gCup').oninput=upd;upd();
    $('gB').onclick=ob2;
    $('gDone').onclick=async()=>{$('gDone').disabled=true;
      ['lang','theme','palette','wgoal','cup','onboarded'].forEach((k,i)=>LS.setItem(k,String([OB.lang,OB.mode,OB.pal,OB.goal,OB.cup,'1'][i])));
      clearTimeout(pushTimer);await push();launch()};
  }

  function launch(){
    window.GLO_USER={name:USER&&USER.name,email:USER&&USER.email,id:USER&&USER.$id};
    document.body.classList.remove('locked');
    startApp();
  }
  window.gloLogout=async()=>{clearTimeout(pushTimer);await push();try{await account.deleteSession({sessionId:'current'})}catch(e){}
    KEYS.concat(['_uid','_lt']).filter(k=>!['lang','theme','palette'].includes(k)).forEach(k=>{try{origRem.call(LS,k)}catch(e){}});location.reload()};

  async function afterAuth(isNew){
    V.innerHTML='<div class="spin"></div>';
    USER=await account.get();
    let p={};try{p=await account.getPrefs()||{}}catch(e){}
    remoteT=+p.t||0;const localT=+(lsGet('_lt')||0);
    if(lsGet('_uid')!==USER.$id){pull(p);lsSet('_uid',USER.$id)}
    else if(remoteT>localT)pull(p);
    else if(localT>remoteT)schedule();
    L=lsGet('lang')==='en'?'en':(lsGet('lang')==='ar'?'ar':L);setDir();
    if(lsGet('onboarded')==='1'||p.onb){if(lsGet('onboarded')!=='1')lsSet('onboarded','1');launch()}
    else{OB.lang=L;ob1()}
  }

  (async()=>{
    $('gtag').textContent=t('tag');V.innerHTML='<div class="spin"></div>';
    try{await account.get();await afterAuth()}catch(e){showLogin()}
  })();
})();
