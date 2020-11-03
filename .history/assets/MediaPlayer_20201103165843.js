class MediaPlayer {
  constructor(config) {
    this.media = config.el
    this.plugins = config.plugins || []

    this._initPlugins();
  }

  _initPlugins = () => {
    const player = {
      play: () => this.play(),
      pause: () => this.pause(),
      media: this.media,
      get muted() {
        return this.media.muted;
      }
    }
    this.plugins.forEach(plugin => plugin.run(this));
  }

  play = () => this.media.play();

  pause = () => this.media.pause();

  togglePlay = () => {
    (this.media.paused) ? this.play() : this.pause() ;
  }

  mute = () => this.media.mute = true;

  unmute = () => this.media.mute = false;
}

export default MediaPlayer;