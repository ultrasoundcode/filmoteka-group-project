import { refs } from '../refs';
import {
  getAllMoviesFromLocalStorage,
  getFromLocalStorage,
} from '../storage/ls-data-services';
import { renderMoviesDetailed } from './fnRenderMoviesDetailed';

refs.libraryBtn.addEventListener('click', onMyLibraryClick);
// Рендер всех, неотфильтрованных фильмов из Local Storage при нажатии на My Library
function onMyLibraryClick() {
  renderMoviesDetailed(getAllMoviesFromLocalStorage());
}

function renderMoviesByPageNumber(pageNumber) {
  const movies = getAllMoviesFromLocalStorage();

  const startIndex = (pageNumber - 1) * 20;
  let endIndex = startIndex + 20;
  endIndex = Math.min(endIndex, movies.length);

  const moviesToRender = movies.slice(startIndex, endIndex);

  renderMoviesDetailed(moviesToRender);
}
function renderWatchedMoviesByPageNumber(pageNumber) {
  const movies = getFromLocalStorage('watched');

  const startIndex = (pageNumber - 1) * 20;
  let endIndex = startIndex + 20;
  endIndex = Math.min(endIndex, movies.length);

  const moviesToRender = movies.slice(startIndex, endIndex);

  renderMoviesDetailed(moviesToRender);
}
function renderQueueMoviesByPageNumber(pageNumber) {
  const movies = getFromLocalStorage('queue');

  const startIndex = (pageNumber - 1) * 20;
  let endIndex = startIndex + 20;
  endIndex = Math.min(endIndex, movies.length);

  const moviesToRender = movies.slice(startIndex, endIndex);

  renderMoviesDetailed(moviesToRender);
}

export {
  onMyLibraryClick,
  renderMoviesByPageNumber,
  renderQueueMoviesByPageNumber,
  renderWatchedMoviesByPageNumber,
};
