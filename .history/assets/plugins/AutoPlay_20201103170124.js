class AutoPlay {
  run = player => {
    if(!player.muted) player.mute();
    player.play();
  };
}

export default AutoPlay;