import MovieApi from './apiService';
import { refs } from './refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { renderMovies } from './templates/card-film';

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
refs.searchForm.addEventListener('submit', onSearchMovie);
// Обработчик событий на кнопку "HOME"
refs.homeBtn.addEventListener('click', onHomeBtn);
// Обработчик событий на кнопку "MY LIBRARY"
refs.libraryBtn.addEventListener('click', onLibraryBtn);

async function onSearchMovie(e) {
  e.preventDefault();
  const query = refs.searchInput.value.trim();
  try {
    if (query === '') {
     Notify.info('I need your clothes, your boots and your...QUERY! :)');
     return;
    }
    const movies = await movieApi.searchMovies(query);
    if (movies.length === 0) {
      Notify.failure('Houston, we have a problem :( , no movies found ...Please try another search term.');
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
  } catch (error) {
    console.error(error);
  }
};

async function onLibraryBtn() {
  // Здесь можно перейти на страницу с выбранной коллекцией фильмов
};


