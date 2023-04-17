import MovieApi from './apiService';
import debounce from 'lodash/debounce';
import { refs } from './refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { renderMovies } from './card-film';

const DEBOUNCE_DELAY = 250;
const movieApi = new MovieApi();

// Загрузка списка самых популярных фильмов при загрузке страницы
(async () => {
  try {
    const movies = await movieApi.getTrendingMovies();
    renderMovies(movies);

  } catch (error) {
    console.error(error);
  }
})();

// Обработчик событий на форму поиска
refs.searchInput.addEventListener('input', debounce(onSearchMovie, DEBOUNCE_DELAY));
// Обработчик событий на кнопку "HOME"
refs.homeBtn.addEventListener('click', onHomeBtn);
// Обработчик событий на кнопку "MY LIBRARY"
refs.libraryBtn.addEventListener('click', onLibraryBtn);

async function onSearchMovie() {
  const query = refs.searchInput.value.trim();

  try {
    if (query === '') {
      Notify.info('Please enter a movie name to search.');
      clearSearchItemsMarkup();
      return;
    }
    const movies = await movieApi.searchMovies(query);
    if (movies.length === 0) {
      Notify.failure(
        'Sorry, no results found. Please try again with a different movie name.'
      );
      refs.searchInput.value = '';
      return;
    }
    renderMovies(movies);
  } catch (error) {
    console.error(error);
  }
}

async function onHomeBtn() {
  try {
    const movies = await movieApi.getTrendingMovies();
    renderMovies(movies);
    refs.searchInput.value = '';
  } catch (error) {
    console.error(error);
  }
}

async function onLibraryBtn() {
  // Здесь можно перейти на страницу с выбранной коллекцией фильмов
}

function clearSearchItemsMarkup() {
  refs.gallery.innerHTML = '';
}
