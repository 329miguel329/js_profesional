class AutoPause {
  constructor() {
    this.threshold = 0.25;
  }

  run = player => {
    this.player = player;

    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: 0.25,
    });

    observer.observe(this.player.media);
  };

  handleIntersection(entries) {
    const entry = entries[0];
    console.log(entry);
  }
}

export default AutoPause;