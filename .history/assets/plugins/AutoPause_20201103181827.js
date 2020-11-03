class AutoPause {
  run = player => {
    if(!player.muted) player.muted = true;
    player.play();
  };
}

export default AutoPause;