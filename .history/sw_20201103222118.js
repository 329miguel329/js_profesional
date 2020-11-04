const VERSION = "v1";

self.addEventListener('install', event => {
  event.waitUntil(precache());
});

self.addEventListener('fetch', event => {
  const request = event.request;

  if(request.method !== "GET") {
    return;
  }

  // Buscar en cache
  event.responseWith(cacheResponse(request));

  // Actualizar cache
  event.waitUntil(updateCache(request));
});

const precache = async () => {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    '/',
    '/index.html',
    '/assets/index.js',
    '/assets/MediaPlayer.js',
    '/assets/plugins/AutoPlay.js',
    '/assets/plugins/AutoPause.js',
    '/assets/index.css',
    '/assets/BigBuckBunny.mp4',
  ])
}

const cacheResponse = async request => {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  return response || fetch(request);
}

const updateCache = async request => {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  return response || fetch(request);
}