import MovieApi from './apiService';
import debounce from 'lodash/debounce';
import { refs } from './refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { renderMovies } from './card-film-render';
import { onHomeBtn } from './nav-bar/nav-btns-functions';

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
refs.searchInput.addEventListener(
  'input',
  debounce(onSearchMovie, DEBOUNCE_DELAY)
);

async function onSearchMovie() {
  const query = refs.searchInput.value.trim();

  try {
    if (query === '') {
      onHomeBtn();
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
refs.team.addEventListener('click', () => {
  Notify.success('Тут скоро будет модалка');
});
