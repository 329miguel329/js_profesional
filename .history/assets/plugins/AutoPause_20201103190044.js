class AutoPause {
  constructor() {
    this.threshold = 0.40;
    this.handleIntersection = this.handleIntersection.bind(this);
  }

  run = player => {
    this.player = player;

    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    });

    observer.observe(this.player.media);

    document.addEventListener("visibilitychange", this.handleVisibilityChange)
  };

  handleIntersection(entries) {
    const entry = entries[0];
    (entry.intersectionRatio >= this.threshold) ? this.player.play() : this.player.pause() ;
  }

  handleIntersection(entries) {
    const entry = entries[0];
    (entry.intersectionRatio >= this.threshold) ? this.player.play() : this.player.pause() ;
  }
}

export default AutoPause;