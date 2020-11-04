import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';

const video: HTMLElement = document.querySelector("video");
const bPlay: HTMLElement = document.getElementById("bPlay");
const bMute: HTMLElement = document.getElementById("bMute");

const player = new MediaPlayer({
  el: video,
  plugins: [
    new AutoPlay(),
    new AutoPause()
  ]
});

bPlay.onclick = () => player.togglePlay();
bMute.onclick = () => player.toggleMute();

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../sw.js').catch(error => {
    console.log(error.message);
  });
}