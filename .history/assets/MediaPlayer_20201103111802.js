class MediaPlayer {
  constructor(config) {
    this.media = config.el
    this.plugins = config.plugins || []
  }

  play = () => this.media.play()

  pause = () => this.media.pause()

  togglePlay = () => {
    (this.media.paused) ? this.play() : this.pause() ;
  }
}

export default MediaPlayer;