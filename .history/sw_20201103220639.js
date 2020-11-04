self.addEventListener('install', event => {
  event.waitUntil(precache());
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