


const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");

function SpeedControl(e) {

  let y = e.pageY - this.offsetTop;
  let percent = y / this.offsetHeight;
  let min = 0.4;
  let max = 10;
  let height = Math.round(percent * 100) + '%';
  const playbackrate = percent * (max - min) + min;
  bar.style.height = height;
  bar.textContent = playbackrate.toFixed(2) + 'x';
  video.playbackRate = playbackrate;
  
}


speed.addEventListener("mousemove",SpeedControl);

