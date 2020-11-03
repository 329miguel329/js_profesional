class MediaPlayer {
  constructor(config) {
    this.media = config.el
  }

  play = () => this.media.play()

  pause = () => this.media.pause()
}