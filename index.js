// Play / Pause of the video BG - Hero Page
const myVideo = document.querySelector('.my-video');

const playPause = () => {
  if (myVideo.paused) {
    myVideo.play();
  } else {
    myVideo.pause();
  }
};
