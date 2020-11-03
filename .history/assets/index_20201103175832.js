import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video");
const button = document.getElementById("bPlay");
const button = document.getElementById("bMute");

const player = new MediaPlayer({
  el: video,
  plugins: [
    new AutoPlay()
  ]
});

button.onclick = () => player.togglePlay();