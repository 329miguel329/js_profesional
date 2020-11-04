self.addEventListener('install', event => {
  event.waitUntil(precache());
});

const precache = () => {

}