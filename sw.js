// აპისთვის (Windows, ტელეფონი): ჯერ ინტერნეტიდან ვიღებთ, რომ ყოველთვის ახალი ვერსია ჩანდეს, და ასლს ვინახავთ.
// ინტერნეტი თუ არ არის, ბოლო შენახულ ასლს ვაჩვენებთ. Supabase-ის მოთხოვნებს (ანგარიში, მონაცემები) არ ვეხებით
const CACHE = 'english-quest';
const HOSTS = [location.host, 'cdn.jsdelivr.net', 'fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || !HOSTS.includes(url.host) || url.pathname.startsWith('/_vercel/')) return;
  e.respondWith(fetch(req).then(res => {
    // opaque: Google Fonts-ის CSS, რომელსაც ბრაუზერი CORS-ის გარეშე ითხოვს
    if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  }).catch(async () => (await caches.match(req, { ignoreSearch: true }))
    || (req.mode === 'navigate' && await caches.match('./')) || Response.error()));
});
