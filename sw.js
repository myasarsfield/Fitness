// Offline support for the hosted Fitness Logbook.
// App files: network first (so updates arrive), falling back to the saved copy when offline.
// Libraries and fonts: saved copy first. Supabase and food lookups are never cached.
const CACHE = 'logbook-v1';
const SHELL = ['./', './index.html', './config.js', './manifest.json', './icons/icon-192.png', './icons/apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (/supabase\.co$|openfoodfacts\.org$/.test(url.hostname)) return;
  const save = res => { if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); } return res; };
  if (url.origin === self.location.origin) {
    e.respondWith(fetch(req).then(save).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('./index.html'))));
    return;
  }
  if (/cdn\.jsdelivr\.net$|fonts\.googleapis\.com$|fonts\.gstatic\.com$/.test(url.hostname)) {
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(save)));
  }
});
