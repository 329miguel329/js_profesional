class MediaPlayer {
  constructor(config) {
    this.media = config.el
    this.plugins = config.plugins || []

    this._initPlugins();
  }

  _initPlugins = () => {
    this.plugins.forEach(plugin => plugin.run(this));
  }

  play = () => this.media.play();

  pause = () => this.media.pause();

  togglePlay = () => {
    (this.media.paused) ? this.play() : this.pause() ;
  }

  mute = () => this.media.mute();
}

export default MediaPlayer;