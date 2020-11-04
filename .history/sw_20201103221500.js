self.addEventListener('install', event => {
  event.waitUntil(precache());
});

self.addEventListener('fetch', event => {
  const request = event.request;

  if(request.method !== "GET") {
    return;
  }

  event.responseWith(cacheResponse(request));
});

const precache = async () => {
  const cache = await caches.open("v1");
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

cacheResponse = request => {
  
}