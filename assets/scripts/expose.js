// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelection = document.getElementById("horn-select");
  const chosenImage = document.querySelector('#expose img');
  const audio = document.querySelector('audio');
  const soundButton = document.querySelector('button');
  const confetti = new JSConfetti();

  hornSelection.addEventListener('change', (event) => {
    const currentHorn = event.target.value;
     
    chosenImage.src = `./assets/images/${currentHorn}.svg`;
    audio.src = `./assets/audio/${currentHorn}.mp3`;
    chosenImage.alt = `${currentHorn} selected`;
  });

  const sliderLevel = document.getElementById("volume");
  const levelPic = document.querySelector('#volume-controls img');

  sliderLevel.addEventListener('input', (event) => {
    const volumeValue = event.target.value;
    audio.volume = volumeValue / 100;

    if (volumeValue == 0) {
      levelPic.src = '/assets/icons/volume-level-0.svg'
      levelPic.alt = 'Volume level 0';
    }

    else if (volumeValue >= 1 && volumeValue < 33) {
      levelPic.src = './assets/icons/volume-level-1.svg'
      levelPic.alt = 'Volume level 1';
    }

    else if (volumeValue > 33 && volumeValue <= 67) {
      levelPic.src = './assets/icons/volume-level-2.svg'
      levelPic.alt = 'Volume level 2';
    }

    else if (volumeValue > 67) {
      levelPic.src = './assets/icons/volume-level-3.svg'
      levelPic.alt = 'Volume level 3';
    }
  });

  soundButton.addEventListener('click', () => {
    audio.play();

    if (hornSelection.value == 'party-horn') {
      confetti.addConfetti();
    }
  });  
}