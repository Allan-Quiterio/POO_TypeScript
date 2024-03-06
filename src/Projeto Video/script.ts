interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}

interface VideoPlayerProtocol {
  playToggle(): void;
  stop(): void;
  iniciarEventos(): void;
}

class VideoPlayer implements VideoPlayerProtocol {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor(videoPlayerElement: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElement.videoPlayer;
    this.playButton = videoPlayerElement.playButton;
    this.stopButton = videoPlayerElement.stopButton;
  }

  iniciarEventos(): void {
    this.playButton.addEventListener("click", () => {
      this.playToggle();
    });

    this.stopButton.addEventListener("click", () => {
      this.stop();
    });
  }
  playToggle(): void {
    if (this.videoPlayer.paused) {
      this.playButton.innerText = "Pause";
      this.videoPlayer.play();
    } else {
      this.playButton.innerText = "Play";
      this.videoPlayer.pause();
    }
  }
  stop(): void {
    this.videoPlayer.pause();
    this.videoPlayer.currentTime = 0;
    this.playButton.innerText = "Play";
  }
}

const videoPlayer = new VideoPlayer({
  playButton: document.querySelector(".play") as HTMLButtonElement,
  videoPlayer: document.querySelector(".video") as HTMLVideoElement,
  stopButton: document.querySelector(".stop") as HTMLButtonElement,
});

videoPlayer.iniciarEventos();
