import { refs } from '../refs';
import { addToLocalStorage } from '../storage/ls-data-services';
import { checkMovieLocationById } from '../storage/ls-data-services';

//Выделяет динамические кнопки модалки
// проверяет по какой кнопке прошел клик
// Вызывает соответсвующую функцию onAddToWatchedClick или onAddToQueueClick
function onModalBtnClick(e, movie) {
  const addWatched = document.querySelector('.addWatched');
  const addQueue = document.querySelector('.addQueue');

  if (e.target.matches('.addWatched')) {
    onAddToWatchedClick(movie, addWatched, addQueue);
  } else if (e.target.matches('.addQueue')) {
    onAddToQueueClick(movie, addWatched, addQueue);
  }
}

// При нажатии Add to Watched отправляет объект фильма в Local Storage, использует key - watched
// Визуально меняет кнопку, убирает Add to Queue
function onAddToWatchedClick(movieData, addWatched, addQueue) {
  addToLocalStorage('watched', movieData, 'watched');
  hideQueue(addWatched, addQueue);
}

// Функция отоброжения кнопок модалки при открытии, проверят, добавлен ли фильм в Local Storage
function toggleModalBtnsDisplay(id, addWatched, addQueue) {
  if (checkMovieLocationById(id) === 'queue') {
    hideWatched(addWatched, addQueue);
  }
  if (checkMovieLocationById(id) === 'watched') {
    hideQueue(addWatched, addQueue);
  }
}

// При нажатии Add to Queue отправляет объект фильма в Local Storage, использует key - queue
// Визуально меняет кнопку, убирает Add to Watched
function onAddToQueueClick(movieData, addWatched, addQueue) {
  addToLocalStorage('queue', movieData, 'queue');
  hideWatched(addWatched, addQueue);
}

// Визуально меняет кнопку, убирает Add to Queue
function hideQueue(addWatched, addQueue) {
  addWatched.classList.add('lss');
  addWatched.textContent = 'Added to Watched';
  addQueue.classList.add('is-hidden');
}

// Визуально меняет кнопку, убирает Add to Watched
function hideWatched(addWatched, addQueue) {
  addQueue.classList.add('lss');
  addQueue.textContent = 'Added to Queue';
  addWatched.classList.add('is-hidden');
}

export {
  onAddToQueueClick,
  onAddToWatchedClick,
  onModalBtnClick,
  hideQueue,
  hideWatched,
  toggleModalBtnsDisplay,
};
