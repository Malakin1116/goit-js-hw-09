
  document.addEventListener('DOMContentLoaded', function () {
    
    const startButton = document.querySelector('[data-start]');
    const stopButton = document.querySelector('[data-stop]');
    
  stopButton.disabled = true;
    

    function changeBackgroundColor() {
        document.body.style.backgroundColor = getRandomHexColor();
      }
  
    let intervalId = null; 
    
    
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
    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }
    
  });
  