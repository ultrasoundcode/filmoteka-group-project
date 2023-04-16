import MovieApi from '../apiService';
import { refs } from '../refs';
import { modalCard } from './modal-card-layout';
import {
  closeModalOnBgClick,
  closeModalOnEsc,
  closeModalOnBtnClick,
} from './modal-close-functions';

const api = new MovieApi();
refs.gallery.addEventListener('click', async e => {
  let targetId = e.target.closest('li').attributes[0].value;
  await api.getMovieDetails(targetId).then(movie => {
    refs.modalContent.innerHTML = modalCard(movie, targetId);
    refs.modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    refs.modalContent.addEventListener('click', e => {
      if (e.target.matches('.addWatched')) {
        onAddToWatchedClick(movie);
      } else if (e.target.matches('.addQueue')) {
        onAddToQueueClick(movie);
      } else {
        return;
      }
    });
  });
});

function addToLocalStorage(tag, movieData, key) {
  let movies = JSON.parse(localStorage.getItem(tag)) || [];

  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, JSON.stringify([]));
  }

  if (tag === 'watched') {
    const queueMovies = JSON.parse(localStorage.getItem('queue')) || [];
    const movieIndex = movies.findIndex(movie => movie.id === movieData.id);
    if (movieIndex === -1) {
      movies.push(movieData);
      localStorage.setItem(tag, JSON.stringify(movies));
    } else {
      console.log('Movie is already in the array');
    }
  }

  if (tag === 'queue') {
    const watchedMovies = JSON.parse(localStorage.getItem('watched')) || [];
    const movieIndex = movies.findIndex(movie => movie.id === movieData.id);
    const watchedMovieIndex = watchedMovies.findIndex(
      movie => movie.id === movieData.id
    );
    if (movieIndex === -1 && watchedMovieIndex === -1) {
      movies.push(movieData);
      localStorage.setItem(tag, JSON.stringify(movies));
    } else {
      console.log('Movie is already in the array');
    }
  }
}

function onAddToWatchedClick(movieData) {
  addToLocalStorage('watched', movieData, 'watched');
}

function onAddToQueueClick(movieData) {
  addToLocalStorage('queue', movieData, 'queue');
}

refs.closeBtn.addEventListener('click', closeModalOnBtnClick);
window.addEventListener('click', closeModalOnBgClick);
document.addEventListener('keydown', closeModalOnEsc);
