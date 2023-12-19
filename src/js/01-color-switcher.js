


const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]')
const body = document.querySelector('body');

btnStop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

let interval = null;

btnStart.addEventListener("click", changeColor)
function changeColor (){
  btnStart.disabled = true
  btnStop.disabled = false
  interval = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);}

btnStop.addEventListener("click", stopChange)
function stopChange(){
  btnStart.disabled = false
  btnStop.disabled = true
  clearInterval(interval)
}


  // document.addEventListener('DOMContentLoaded', function () {
    
  //   const startButton = document.querySelector('[data-start]');
  //   const stopButton = document.querySelector('[data-stop]');
    
  // stopButton.disabled = true;
    

  //   function changeBackgroundColor() {
  //       document.body.style.backgroundColor = getRandomHexColor();
  //     }
  
  //   let intervalId = null; 
    
    
  //   startButton.addEventListener('click', () => {
  //     startButton.disabled = true;
  //     stopButton.disabled = false;
  //     intervalId = setInterval(changeBackgroundColor, 1000);
  //   });
  
  //   stopButton.addEventListener('click', () => {
      
  //     startButton.disabled = false;
  //     stopButton.disabled = true;
  //     clearInterval(intervalId);
      
  //   });
  //   function getRandomHexColor() {
  //     return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  //   }
  
  // });
  