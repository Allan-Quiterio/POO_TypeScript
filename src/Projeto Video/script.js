"use strict";
class VideoPlayer {
    videoPlayer;
    playButton;
    stopButton;
    constructor(videoPlayerElement) {
        this.videoPlayer = videoPlayerElement.videoPlayer;
        this.playButton = videoPlayerElement.playButton;
        this.stopButton = videoPlayerElement.stopButton;
    }
    iniciarEventos() {
        this.playButton.addEventListener("click", () => {
            this.playToggle();
        });
        this.stopButton.addEventListener("click", () => {
            this.stop();
        });
    }
    playToggle() {
        if (this.videoPlayer.paused) {
            this.playButton.innerText = "Pause";
            this.videoPlayer.play();
        }
        else {
            this.playButton.innerText = "Play";
            this.videoPlayer.pause();
        }
    }
    stop() {
        this.videoPlayer.pause();
        this.videoPlayer.currentTime = 0;
        this.playButton.innerText = "Play";
    }
}
const videoPlayer = new VideoPlayer({
    playButton: document.querySelector(".play"),
    videoPlayer: document.querySelector(".video"),
    stopButton: document.querySelector(".stop"),
});
videoPlayer.iniciarEventos();
