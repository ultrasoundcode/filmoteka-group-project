import { addToLocalStorage } from '../storage/ls-data-services';
// При нажатии Add to Watched отправляет объект фильма в Local Storage
// Использует key - watched
function onAddToWatchedClick(movieData) {
  addToLocalStorage('watched', movieData, 'watched');
}
// При нажатии Add to Queue отправляет объект фильма в Local Storage
// Использует key - queue
function onAddToQueueClick(movieData) {
  addToLocalStorage('queue', movieData, 'queue');
}

export { onAddToQueueClick, onAddToWatchedClick };
