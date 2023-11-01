function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    let intervalId = null;
    const startButton = document.querySelector('[data-start]');
    const stopButton = document.querySelector('[data-stop]');

    function changeBackgroundColor() {
        document.body.style.backgroundColor = getRandomHexColor();
      }
  
    startButton.addEventListener('click', () => {
      startButton.disabled = true;
      stopButton.disabled = false;
      intervalId = setInterval(changeBackgroundColor, 1000);
    });
  
    stopButton.addEventListener('click', () => {
      startButton.disabled = false;
      stopButton.disabled = true;
      clearInterval(intervalId);
    });
  });
  