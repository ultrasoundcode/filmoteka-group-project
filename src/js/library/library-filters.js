import { refs } from '../refs';
import { renderMoviesDetailed } from './library-render-from-local-storage';

refs.libButtons.addEventListener('click', onLibraryBtnClick);

async function onLibraryBtnClick(event) {
  if (event.target.nodeName !== 'A') {
    return;
  }
  const currentActiveTarget = refs.libButtons.querySelector('.active');
  const selectedTarget = event.target;

  await toggleActiveClass(currentActiveTarget, selectedTarget);
  const moviesFromStorage = getFromLocalStorage(
    selectedTarget.textContent.toLowerCase()
  );
  renderMoviesDetailed(moviesFromStorage);
}

function toggleActiveClass(currentActiveTarget, selectedTarget) {
  if (currentActiveTarget) {
    currentActiveTarget.removeAttribute('data-tag');
    currentActiveTarget.classList.remove('active');
  }
  selectedTarget.classList.add('active');
  selectedTarget.setAttribute(
    'data-tag',
    selectedTarget.textContent.toLowerCase()
  );
}

function getFromLocalStorage(tag) {
  let storedMovies = JSON.parse(localStorage.getItem(tag)) || [];
  return storedMovies;
}

refs.libraryBtn.addEventListener('click', getAllMoviesFromLocalStorage);

function getAllMoviesFromLocalStorage() {
  const watchedMovies = getFromLocalStorage('watched');
  const queueMovies = getFromLocalStorage('queue');
  const allMovies = [...watchedMovies, ...queueMovies];
  const uniqueMovies = [...new Set(allMovies.map(movie => movie.id))].map(id =>
    allMovies.find(movie => movie.id === id)
  );
  return uniqueMovies;
}

export { getAllMoviesFromLocalStorage };
