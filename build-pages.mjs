// საჯარო გვერდები Google-ისა და AI ასისტენტებისთვის: course.html, levels.html, words.html, about.html, sitemap.xml, llms.txt.
// სიტყვებს index.html-დან იღებს (COURSE, CEFR, LEVEL_WORDS, PACKS), ამიტომ მათი შეცვლის მერე თავიდან გაუშვი:
//   node build-pages.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const SITE = 'https://www.englishquest.space/';
const src = readFileSync(new URL('index.html', import.meta.url), 'utf8');
const pick = (re, what) => { const m = src.match(re); assert.ok(m, `index.html-ში ვერ ვიპოვე: ${what}`); return m[1] ?? m[0]; };
// `const X = [...];` ან `{...};` index.html-დან (ჩვენივე კოდია, ამიტომ პირდაპირ ვასრულებთ)
const data = name => Function(`return ${pick(new RegExp(`^const ${name} = ([\\s\\S]*?^[\\]}]);`, 'm'), name)}`)();
const COURSE = data('COURSE'), CEFR = data('CEFR'), LEVEL_WORDS = data('LEVEL_WORDS'), PACKS = data('PACKS');
const COURSE_MIN = +pick(/^const COURSE_MIN = (\d+);/m, 'COURSE_MIN');
const EMO_RE = Function(`return ${pick(/^const EMO_RE = (\/.+\/gu);/m, 'EMO_RE')}`)();
const FILTER = pick(/<svg width="0"[\s\S]*?<\/svg>/, 'ემოჯის ფილტრი');
const LOGO = pick(/<svg class="logo-mark"[\s\S]*?<\/svg>/, 'ლოგო');
const ICONS = pick(/<link rel="icon"[^>]*>\n<link rel="icon"[^>]*>/, 'ხატულები');
const FONTS = pick(/<link href="https:\/\/fonts\.googleapis\.com[^>]*>/, 'შრიფტები');

const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const words = s => s.split('\n').map(l => {
  const [en, ka, extra] = l.split(' - ');
  assert.ok(en && ka && extra === undefined, `სიტყვა უნდა იყოს "english - ქართული": ${l}`);
  return { en, ka };
});
const table = list => `<table><tr><th>English</th><th>ქართული</th></tr>${list.map(w =>
  `<tr><td><b>${esc(w.en)}</b></td><td>${esc(w.ka)}</td></tr>`).join('')}</table>`;
const nn = i => String(i + 1).padStart(2, '0');

const NAV = [['./', '🏠 მთავარი'], ['course', '💻 პროგრამირება'], ['levels', '🎓 დონეები'], ['words', '📖 სიტყვები'], ['about', 'ℹ️ როგორ მუშაობს']];
const page = ({ file, title, desc, body, ld }) => {
  const url = SITE + file;
  // ემოჯებს .emo-ში ვფუთავთ (წითელ-შავ-თეთრი ფილტრი, როგორც აპში); მხოლოდ body-ში, რომ meta-ებს არ შეეხოს
  const html = `${FILTER}
<header class="top">
  <a class="logo" href="./">${LOGO}<span><span class="px">LEARN ENGLISH</span><b>ისწავლე ინგლისური</b></span></a>
  <a class="btn red" href="./">▶ დაიწყე სწავლა</a>
</header>
<nav class="nav">${NAV.map(([h, t]) => `<a href="${h}"${h === file ? ' aria-current="page"' : ''}>${t}</a>`).join('')}</nav>
<main>
${body}
</main>
<footer class="foot">Powered by codequest
  <div class="legal"><a href="privacy">კონფიდენციალურობა</a> · <a href="terms">წესები</a></div></footer>`.replace(EMO_RE, '<span class="emo">$&</span>');
  return `<!doctype html>
<html lang="ka">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="English Quest">
<meta property="og:locale" content="ka_GE">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}icon-512.png">
<meta name="twitter:card" content="summary">
<link rel="manifest" href="manifest.webmanifest">
<meta name="theme-color" content="#f4f4f1">
${ICONS}
<!-- Vercel Web Analytics: ანონიმური ვიზიტების სტატისტიკა (cookie-ების გარეშე) -->
<script>window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };</script>
<script defer src="/_vercel/insights/script.js"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
${FONTS}
<link rel="stylesheet" href="site.css">
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', url, ...ld }).replace(/</g, '\\u003c')}</script>
</head>
<body>
${html}
</body>
</html>
`;
};

// ---------- გვერდები ----------
const courseWords = COURSE.map(m => words(m.words));
const total = courseWords.reduce((a, w) => a + w.length, 0), hours = COURSE.length * COURSE_MIN / 60;
const perLevel = words(LEVEL_WORDS[CEFR[0][0]]).length;
const packs = Object.entries(PACKS), topics = packs.map(([n]) => n.replace(EMO_RE, '').trim()).join(', ');

const course = {
  file: 'course',
  title: `პროგრამირების ინგლისური: ${total} სიტყვა ქართულად · English Quest`,
  desc: `უფასო კურსი: პროგრამირების ${total} ინგლისური სიტყვა ქართული თარგმანით და კოდის მაგალითებით. ${COURSE.length} მოდული, ≈ ${hours} საათი.`,
  ld: { '@type': 'Course', name: 'პროგრამირების ინგლისური', inLanguage: 'ka', isAccessibleForFree: true, timeRequired: `PT${hours}H`,
        description: `პროგრამირების ${total} ინგლისური სიტყვა ქართული თარგმანით, ${COURSE.length} მოდულად.`,
        provider: { '@type': 'Organization', name: 'English Quest', url: SITE } },
  body: `<h1>💻 პროგრამირების ინგლისური</h1>
<p class="lead">სრული უფასო კურსი ქართულად: ყველა ის ინგლისური სიტყვა, რომელიც პროგრამირებაში დაგჭირდება.
<b>${COURSE.length} მოდული · ${total} სიტყვა · ≈ ${hours} საათი</b>. თითო სიტყვას აქვს ქართული თარგმანი, თითო მოდულს კი კოდის მაგალითი.</p>
<p><a class="btn red" href="./#course">▶ დაიწყე კურსი</a></p>
<p class="muted">აპში ამ სიტყვებს ისწავლი გადაწერით, შენით დაწერით, ბარათებით, ვიქტორინით და ტესტით, პროგრესი კი შენს ანგარიშზე შეინახება.</p>
<p class="toc">${COURSE.map((m, i) => `<a href="#m${i + 1}">${nn(i)} ${m.icon} ${esc(m.title)}</a>`).join(' ')}</p>
${COURSE.map((m, i) => `<section id="m${i + 1}">
<h2>${nn(i)} ${m.icon} ${esc(m.title)}</h2>
<p class="muted">${esc(m.desc)} · ${courseWords[i].length} სიტყვა · ≈ ${COURSE_MIN} წთ</p>
${table(courseWords[i])}
<pre><code>${esc(m.code)}</code></pre>
</section>`).join('\n')}
<p lang="en" class="muted">Programming English for Georgian speakers: ${total} essential programming words in ${COURSE.length} modules,
with Georgian translations and code examples. Free.</p>`
};

const levels = {
  file: 'levels',
  title: 'ინგლისურის დონეები A1–C2 და სიტყვები თითო დონისთვის · English Quest',
  desc: `რას ნიშნავს ინგლისურის დონეები A1, A2, B1, B2, C1 და C2 და რა სიტყვები უნდა იცოდე თითოეულზე. ${CEFR.length * perLevel} სიტყვა ქართული თარგმანით, უფასოდ.`,
  ld: { '@type': 'WebPage', name: 'ინგლისურის დონეები A1–C2', inLanguage: 'ka' },
  body: `<h1>🎓 ინგლისურის დონეები A1–C2</h1>
<p class="lead">ინგლისურის ცოდნას ექვს დონედ ყოფენ (CEFR, ევროპული სტანდარტი): A1 და A2 დამწყებისთვისაა, B1 და B2 საშუალო დონეა,
C1 და C2 კი მაღალი. აქ თითო დონეს ${perLevel} დამახასიათებელი სიტყვა აქვს ქართული თარგმანით.</p>
<p><a class="btn red" href="./">▶ აირჩიე შენი დონე</a></p>
<p class="muted">აპში ზედა ზოლზე დააჭირე „🎓 დონე“-ს: აირჩიე დონე და მისი სიტყვები გაკვეთილად დაგემატება.</p>
<p class="toc">${CEFR.map(([c, n]) => `<a href="#${c.toLowerCase()}">${c} · ${esc(n)}</a>`).join(' ')}</p>
${CEFR.map(([c, n, d]) => `<section id="${c.toLowerCase()}">
<h2>${c}: ${esc(n)}</h2>
<p class="muted">${esc(d)}</p>
${table(words(LEVEL_WORDS[c]))}
</section>`).join('\n')}
<p lang="en" class="muted">English levels A1–C2 (CEFR) explained in Georgian, with ${perLevel} typical words for each level.</p>`
};

const wordsPage = {
  file: 'words',
  title: 'ინგლისური სიტყვები თემების მიხედვით, ქართული თარგმანით · English Quest',
  desc: `ინგლისური სიტყვები თემებით: ${topics}, ქართული თარგმანით. ისწავლე უფასოდ გადაწერით, დაწერით და ტესტით.`,
  ld: { '@type': 'WebPage', name: 'ინგლისური სიტყვები თემების მიხედვით', inLanguage: 'ka' },
  body: `<h1>📖 ინგლისური სიტყვები თემების მიხედვით</h1>
<p class="lead">მარტივი ინგლისური სიტყვები ქართული თარგმანით, თემებად დაყოფილი. აპში თითოეული თემა ერთი დაჭერით ემატება გაკვეთილად.</p>
<p><a class="btn red" href="./">▶ დაიწყე სწავლა</a></p>
<p class="toc">${packs.map(([n], i) => `<a href="#t${i + 1}">${esc(n)}</a>`).join(' ')}</p>
${packs.map(([n, list], i) => `<section id="t${i + 1}">
<h2>${esc(n)}</h2>
${table(words(list))}
</section>`).join('\n')}
<h2>✏️ შენი სიტყვები</h2>
<p>საკუთარი გაკვეთილისთვის ჩაწერე სიტყვები ასე, თითო ხაზზე ერთი:</p>
<pre><code>apple - ვაშლი
book - წიგნი
friend - მეგობარი</code></pre>
<p lang="en" class="muted">Basic English words by topic with Georgian translations.</p>`
};

const FAQ = [
  ['სად ვისწავლო ინგლისური სიტყვები უფასოდ?', 'English Quest-ზე (www.englishquest.space). საიტი სრულიად უფასოა და ქართულ ენაზეა: ისწავლი შენ მიერ არჩეულ სიტყვებს, დონეების (A1–C2) სიტყვებს და პროგრამირების ინგლისურს.'],
  ['English Quest უფასოა?', 'დიახ, ყველა ფუნქცია უფასოა და რეკლამა არ არის.'],
  ['რეგისტრაცია საჭიროა?', 'ანგარიში (ელფოსტით ან Google-ით) საჭიროა, რომ გაკვეთილები და პროგრესი შეინახოს და ყველა მოწყობილობაზე გამოჩნდეს.'],
  ['რომელი დონისთვისაა?', 'დამწყებიდან (A1) მაღალ დონემდე (C2). საკუთარი სიტყვებიც შეგიძლია დაამატო, ნებისმიერი თემით.'],
  ['მუშაობს ტელეფონზე და Windows-ზე?', 'დიახ, ნებისმიერ თანამედროვე ბრაუზერში. Windows-ზე აპადაც დაყენდება: გახსენი საიტი Microsoft Edge-ში ან Google Chrome-ში და მთავარი გვერდის ბოლოში დააჭირე „Windows აპის დაყენება“.'],
  ['როგორ დავამატო ჩემი სიტყვები?', 'შექმენი ახალი გაკვეთილი და ჩაწერე სიტყვები ასე: „apple - ვაშლი“, თითო ხაზზე ერთი.'],
  ['სად ვისწავლო პროგრამირების ინგლისური?', `English Quest-ის უფასო კურსში: ${COURSE.length} მოდული და ${total} სიტყვა ქართული თარგმანით და კოდის მაგალითებით.`]
];
const about = {
  file: 'about',
  title: 'როგორ ვისწავლოთ ინგლისური სიტყვები: 3 ნაბიჯი · English Quest',
  desc: 'English Quest უფასოდ გასწავლის ინგლისურ სიტყვებს ქართულად: გადაწერე, შენით დაწერე და ჩააბარე ტესტი. ბარათები, ვიქტორინა, კარნახი, დონეები A1–C2 და Windows აპი.',
  ld: { '@type': 'FAQPage', mainEntity: FAQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
  body: `<h1>ℹ️ როგორ მუშაობს English Quest</h1>
<p class="lead">English Quest (ისწავლე ინგლისური) უფასო საიტია, სადაც ინგლისურ სიტყვებს ქართულად სწავლობ.
შენ ირჩევ, რა სიტყვები ისწავლო, საიტი კი სამ ნაბიჯში დაგამახსოვრებინებს.</p>
<p><a class="btn red" href="./">▶ დაიწყე სწავლა</a></p>
<h2>📝 სამი ნაბიჯი</h2>
<ol>
<li><b>✍️ გადაწერა.</b> სიტყვა ეკრანზე ჩანს და ზემოდან გადაწერ. შეცდომა წითლად გამოჩნდება.</li>
<li><b>🧠 შენით დაწერა.</b> ხედავ ქართულ თარგმანს და ინგლისურ სიტყვას თვითონ წერ. არასწორი პასუხი წითლად გამოჩნდება.</li>
<li><b>📝 ჩაბარება.</b> ყველა სიტყვას ერთად წერ, აჭერ „ჩაბარებას“ და ხედავ, რა დაწერე სწორად და რა არა.</li>
</ol>
<h2>🎮 სხვა რეჟიმები და ფუნქციები</h2>
<ul>
<li>🃏 ბარათები, 🎯 ვიქტორინა და 🎧 კარნახი: სიტყვას ისმენ და წერ</li>
<li>🔊 ყველა სიტყვის მოსმენა ინგლისური გამოთქმით</li>
<li>⭐ XP, 🔥 დღეების სერია, დღის მიზანი და სტატისტიკა; 💪 რთული სიტყვების ცალკე გამეორება</li>
<li>🎓 <a href="levels">დონეები A1–C2</a>, 💻 <a href="course">პროგრამირების ინგლისური</a> და 📖 <a href="words">სიტყვები თემებით</a></li>
<li>☁️ ანგარიში ელფოსტით ან Google-ით: პროგრესი ყველა მოწყობილობაზე ჩანს</li>
<li>💾 გაკვეთილიდან გასვლისას პროგრესი ინახება და შემდეგ იქიდან გააგრძელებ</li>
<li>📰 რამდენიმე სტილი, მათ შორის ღამის რეჟიმი</li>
</ul>
<h2>💻 Windows აპი</h2>
<p>English Quest კომპიუტერზე აპად დააყენე: გახსენი საიტი Microsoft Edge-ში ან Google Chrome-ში და მთავარი გვერდის ბოლოში
დააჭირე „Windows აპის დაყენება“. აპი Start მენიუში გამოჩნდება და საკუთარ ფანჯარაში გაიხსნება.</p>
<h2>❓ ხშირი კითხვები</h2>
${FAQ.map(([q, a]) => `<h3>${esc(q)}</h3>\n<p>${esc(a)}</p>`).join('\n')}
<h2 lang="en">English</h2>
<p lang="en">English Quest (englishquest.space) is a free website for Georgian speakers to learn English vocabulary.
Create your own word lessons and learn them in three steps: copy each word, write it from memory, then take a final test.
There are also flashcards, quizzes, dictation, CEFR levels A1–C2 and a programming English course.
It works in any browser and can be installed as a Windows app.</p>`
};

// ---------- ჩაწერა + შემოწმება ----------
const pages = [course, levels, wordsPage, about];
const write = (name, text) => writeFileSync(new URL(name, import.meta.url), text);
// ტექსტში "undefined" შეიძლება სიტყვაც იყოს (კურსშია), ამიტომ თვითონ მონაცემებს ვამოწმებთ
assert.equal(new Set(pages.map(p => p.title)).size, pages.length, 'სათაურები განსხვავებული უნდა იყოს');
assert.ok([total, hours, perLevel].every(n => Number.isFinite(n) && n > 0), 'რიცხვები');
for (const m of COURSE) for (const k of ['icon', 'title', 'desc', 'code']) assert.equal(typeof m[k], 'string', `COURSE: ${k}`);
for (const [c, n, d] of CEFR) assert.ok(n && d && LEVEL_WORDS[c], `${c}: სახელი, აღწერა ან სიტყვები აკლია`);
for (const p of pages) write(p.file + '.html', page(p));
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${['', ...pages.map(p => p.file), 'privacy', 'terms'].map(f => `  <url><loc>${SITE}${f}</loc></url>`).join('\n')}
</urlset>
`);
write('llms.txt', `# English Quest (ისწავლე ინგლისური)

> English Quest (${SITE}) is a free website for Georgian speakers to learn English vocabulary. You create word lessons and learn them in three steps (copy, write from memory, final test), with flashcards, quizzes and dictation. It also has CEFR levels A1–C2 and a programming English course (${COURSE.length} modules, ${total} words). Interface language: Georgian. Works in any browser and installs as a Windows app.

English Quest უფასო საიტია ინგლისური სიტყვების სასწავლად ქართულად: გადაწერა, შენით დაწერა, ჩაბარება, ბარათები, ვიქტორინა, კარნახი, დონეები A1–C2 და პროგრამირების ინგლისური.

## Pages

- [App](${SITE}): sign in with email or Google and study your own word lessons
- [Programming English course](${SITE}course): ${COURSE.length} modules, ${total} words with Georgian translations and code examples
- [English levels A1–C2](${SITE}levels): what each CEFR level means, with ${perLevel} words per level
- [English words by topic](${SITE}words): ${packs.length} topics with Georgian translations
- [How it works and FAQ](${SITE}about): the three-step method, all features, the Windows app and common questions
`);
console.log(`✔ ${pages.length} გვერდი, sitemap.xml, llms.txt (კურსი: ${COURSE.length} მოდული, ${total} სიტყვა)`);
