import { refs } from '../refs';
import MovieApi from '../apiService';
const movieApi = new MovieApi();
import { renderMovies } from '../card-film-render';

async function onHomeBtn() {
  try {
    const movies = await movieApi.getTrendingMovies();
    renderMovies(movies);
    makeHomeActive();
    refs.searchInput.value = '';
  } catch (error) {
    console.error(error);
  }
}
function makeHomeActive() {
  refs.homeBtn.classList.add('active');
  refs.libraryBtn.classList.remove('active');

  refs.libButtons.classList.add('is-hidden');
  refs.searchInput.classList.remove('is-hidden');
  refs.watchedBtn.classList.remove('active');
  refs.queueBtn.classList.remove('active');
}
function makeMyLibraryActive() {
  refs.libraryBtn.classList.add('active');
  refs.homeBtn.classList.remove('active');

  refs.libButtons.classList.remove('is-hidden');
  refs.searchInput.classList.add('is-hidden');
}
export { makeHomeActive, makeMyLibraryActive, onHomeBtn };
