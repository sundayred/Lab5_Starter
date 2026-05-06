window.addEventListener('DOMContentLoaded', init);

function init() {
  const speech = window.speechSynthesis;
  const voiceOption = document.getElementById('voice-select');

  const fillOptions = () => {
    const voices = speech.getVoices();

    voiceOption.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
      option.value = voices[i].name;

      voiceOption.appendChild(option);
    } 
  };

  fillOptions();
  speech.onvoiceschanged = fillOptions;

  const voiceButton = document.querySelector('button');
  const textInput = document.getElementById('text-to-speak');
  const emoji = document.querySelector('img');

  voiceButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    const voices = speech.getVoices();
    const voiceName = voiceOption.value;

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === voiceName) {
        utterance.voice = voices[i];
      }
    }

    utterance.onstart = () => {
      emoji.src = 'assets/images/smiling-open.png';
    };

    utterance.onend = () => {
      emoji.src = 'assets/images/smiling.png';
    };

    speech.speak(utterance);
  });
}