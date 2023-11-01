import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";

document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const delay = parseInt(formData.get('delay'));
  const step = parseInt(formData.get('step'));
  const amount = parseInt(formData.get('amount'));

  createPromises(amount, delay, step)
    .then((promises) => {
      promises.forEach(({ position, delay }) => {
        createPromise(position, delay)
          .then(({ position, delay }) => {
            Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
          })
          .catch(({ position, delay }) => {
            Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
          });
      });
    });
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function createPromises(amount, delay, step) {
  const promises = [];
  for (let i = 0; i < amount; i++) {
    promises.push({ position: i + 1, delay: delay + i * step });
  }
  return Promise.resolve(promises);
}
