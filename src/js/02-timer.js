import Notiflix from "notiflix";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const daysData = document.querySelector("[data-days]")
const hoursData = document.querySelector("[data-hours]")
const minutesData = document.querySelector("[data-minutes]")
const secondsData = document.querySelector("[data-seconds]")
const inputData = document.querySelector("#datetime-picker")
const buttonStart = document.querySelector("[data-start]")

buttonStart.disabled = true;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
         if (selectedDates[0] <= new Date()) {
           Notiflix.Notify.failure("Оберіть дату у майбутньому");
           buttonStart.disabled = true;
         } 
         else {
          buttonStart.disabled = false;
           Notiflix.Notify.success("Готово, натискайте START");
         }
  },
};

flatpickr(inputData, options)

buttonStart.addEventListener("click", timerCounter)


function timerCounter() {
  buttonStart.disabled = true;
  const chosenDate = new Date(inputData.value);
  
  const interval = setInterval(() => {
    const timeNow = new Date();
    let countdownTime = chosenDate - timeNow;

    if (countdownTime <= 0) {
      clearInterval(interval); 
      Notiflix.Notify.success("Час вийшов");
      
      daysData.textContent = '0';
      hoursData.textContent = '0';
      minutesData.textContent = '0';
      secondsData.textContent = '0';
      return;
    }

    daysData.textContent = addLeadingZero(Math.floor(countdownTime / 1000 / 60 / 60 / 24));
    hoursData.textContent = addLeadingZero(Math.floor((countdownTime / 1000 / 60 / 60) % 24));
    minutesData.textContent = addLeadingZero(Math.floor((countdownTime / 1000 / 60) % 60));
    secondsData.textContent = addLeadingZero(Math.floor((countdownTime / 1000) % 60));
  }, 1000);
}

const addLeadingZero = value => (value < 10 ? `0${value}` : `${value}`);






// ----------------


// const daysData = document.querySelector("[data-days]");
// const hoursData = document.querySelector("[data-hours]");
// const minutesData = document.querySelector("[data-minutes]");
// const secondsData = document.querySelector("[data-seconds]");
// const inputData = document.querySelector("#datetime-picker");
// const buttonStart = document.querySelector("[data-start]");

// buttonStart.disabled = true;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     if (selectedDates[0] <= new Date()) {
//       Notiflix.Notify.failure('Оберіть дату у майбутньому.');
//       buttonStart.disabled = true;
//     } else {
//       buttonStart.disabled = false;
//       Notiflix.Notify.success('Готово, натискайте START');
//     }
//   },
// };

// flatpickr(inputData, options);

// buttonStart.addEventListener("click", timerCounter);

// function timerCounter() {
//   const chosenDate = new Date(inputData.value);
//   const timeNow = new Date();

//   let countdownTime = chosenDate - timeNow;

//   // Оновлення таймера
//   const updateTimer = () => {
//     if (countdownTime >= 0) {
//       const days = Math.floor(countdownTime / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((countdownTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((countdownTime % (1000 * 60)) / 1000);

//       daysData.textContent = days;
//       hoursData.textContent = hours;
//       minutesData.textContent = minutes;
//       secondsData.textContent = seconds;

//       countdownTime -= 1000;

//       setTimeout(updateTimer, 1000);
//     } else {
//       // Час вийшов
//       Notiflix.Notify.success('Час вийшов!');
//     }
//   };

//   updateTimer();
// }

// const addLeadingZero = value => (value < 10 ? `${value}` : `${value}`.padStart(2, '0'));


// const dateInput = document.querySelector('#datetime-picker');
// const startButton = document.querySelector('[data-start]');
// const valueSpans = document.querySelectorAll('.value');

// let forTime = null;

// startButton.addEventListener('click', () => {
//   valueSpans.forEach(item => item.classList.toggle('end'));
//   startButton.disabled = true;
//   dateInput.disabled = true;

//   const updateCountdown = () => {
//     const choosenDate = new Date(dateInput.value);
//     const timeToFinish = choosenDate - Date.now();
//     if (timeToFinish === 0) {
//       valueSpans.forEach(item => item.classList.toggle('end'));
//       clearInterval(forTime);
//       dateInput.disabled = false;
//     } else {
//       const { days, hours, minutes, seconds } = convertMs(timeToFinish);
//       valueSpans[0].textContent = addLeadingZero(days);
//       valueSpans[1].textContent = addLeadingZero(hours);
//       valueSpans[2].textContent = addLeadingZero(minutes);
//       valueSpans[3].textContent = addLeadingZero(seconds);
//     }
//   };

//   forTime = setInterval(updateCountdown, 1000);
// });

// const convertMs = ms => {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor((ms % hour) / minute);
//   const seconds = Math.floor((ms % minute) / second);

//   return { days, hours, minutes, seconds };
// };

// const addLeadingZero = value => (value < 10 ? `${value}` : `${value}`.padStart(2, '0'));

