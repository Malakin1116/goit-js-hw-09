import Notiflix from 'notiflix';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const dateInput = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const valueSpans = document.querySelectorAll('.value');

let forTime = null;

startButton.disabled = true;

flatpickr(dateInput, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      Notiflix.Notify.failure('Оберіть дату у майбутньому.');
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
      Notiflix.Notify.success('Готово, натискайте START');
    }
  },
});

startButton.addEventListener('click', () => {
  valueSpans.forEach(item => item.classList.toggle('end'));
  startButton.disabled = true;
  dateInput.disabled = true;

  const updateCountdown = () => {
    const choosenDate = new Date(dateInput.value);
    const timeToFinish = choosenDate - Date.now();
    if (timeToFinish === 0) {
      valueSpans.forEach(item => item.classList.toggle('end'));
      clearInterval(forTime);
      dateInput.disabled = false;
    } else {
      const { days, hours, minutes, seconds } = convertMs(timeToFinish);
      valueSpans[0].textContent = addLeadingZero(days);
      valueSpans[1].textContent = addLeadingZero(hours);
      valueSpans[2].textContent = addLeadingZero(minutes);
      valueSpans[3].textContent = addLeadingZero(seconds);
    }
  };

  forTime = setInterval(updateCountdown, 1000);
});

const convertMs = ms => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor((ms % hour) / minute);
  const seconds = Math.floor((ms % minute) / second);

  return { days, hours, minutes, seconds };
};

const addLeadingZero = value => (value < 10 ? `${value}` : `${value}`.padStart(2, '0'));

