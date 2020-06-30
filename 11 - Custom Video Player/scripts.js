const player = document.querySelector(".player");
const progress = player.querySelector(".progress");
const video = player.querySelector(".viewer");
const toggle = player.querySelector(".toggle");
const progressBar = player.querySelector(".progress__filled");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  console.log(icon);
  toggle.textContent = icon;
}

function skip() {
  console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

video.addEventListener("click", togglePlay);
video.addEventListener("pause", updateButton);
video.addEventListener("play", updateButton);

toggle.addEventListener("click", togglePlay);

skipButtons.forEach((button) => button.addEventListener("click", skip));
