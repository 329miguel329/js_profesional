import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector("video");
const bPlay = document.getElementById("bPlay");
const bMute = document.getElementById("bMute");

const player = new MediaPlayer({
  el: video,
  plugins: [
    new AutoPlay()
  ]
});

bPlay.onclick = () => player.togglePlay();
bMute.onclick = () => player.toggleMute();