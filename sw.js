/* MUN ENGLISH service worker: network-first HTML, cache-first versioned app assets. */
const CACHE_NAME = 'mun-english-v3';
const APP_ASSETS = [
  './',
  './index.html',
  './style.css',
  './manager.css',
  './script.js',
  './manager.js',
  './manifest.json'
];
const OPTIONAL_ASSETS = [
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // Missing optional CDN files must never prevent the local app from installing.
    await cache.addAll(APP_ASSETS);
    await Promise.allSettled(OPTIONAL_ASSETS.map((asset) => cache.add(asset)));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys
      .filter((key) => key.startsWith('mun-english-') && key !== CACHE_NAME)
      .map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  // Never cache AI-generation API requests or API responses.
  if (url.origin === self.location.origin && url.pathname.includes('/api/')) return;

  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response && response.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put('./index.html', response.clone());
        }
        return response;
      } catch (error) {
        const cached = await caches.match('./index.html') || await caches.match('./');
        if (cached) return cached;
        throw error;
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cached = await caches.match(request);
    if (cached) return cached;
    try {
      const response = await fetch(request);
      if (response && response.ok && url.origin === self.location.origin) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone());
      }
      return response;
    } catch (error) {
      // Cross-origin libraries may be unavailable offline; other app features still load.
      const fallback = await caches.match(request.url);
      if (fallback) return fallback;
      throw error;
    }
  })());
});
