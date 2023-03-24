const video = document.getElementById("mi-video");

const compruebaPantalla = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      video.play();
      console.log("play")
    } else {
      console.log("pausa")
      video.pause();
    }
  });
});


compruebaPantalla.observe(video);


const playPauseButton = document.getElementById('play-pause');
const muteButton = document.getElementById('mute');


playPauseButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPauseButton.classList.remove('play');
    playPauseButton.classList.add('pause');
  } else {
    video.pause();
    playPauseButton.classList.remove('pause');
    playPauseButton.classList.add('play');
  }
});



muteButton.addEventListener('click', () => {
  if (video.muted) {

    video.muted = false;
    muteButton.classList.remove('unmute');
    muteButton.classList.add('mute');
  } else {
    video.muted = true;
    muteButton.classList.remove('mute');
    muteButton.classList.add('unmute');

    }


});


