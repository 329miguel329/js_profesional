class MediaPlayer {
  constructor(config) {
    this.media = config.el
    this.media = config.plugins || []
  }

  play = () => this.media.play()

  pause = () => this.media.pause()
}

export default MediaPlayer;