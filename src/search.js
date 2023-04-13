import MovieApi from './apiService';

const movieApi = new MovieApi();


const searchForm = document.querySelector('.search-form');
const searchInput = searchForm.querySelector('[name="search"]');
const gallery = document.querySelector('.gallery');
const homeButton = document.querySelector('.home-page');
const libraryButton = document.querySelector('.library-page');

// Загрузка списка самых популярных фильмов при загрузке страницы

// Обработчик событий на форму поиска
searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = searchInput.value.trim();
  const genre = document.querySelector('[name="genre"]').value.trim();
  if (!query) {
    return;
  }
  try {
    const movies = await movieApi.searchMovies(query, genre, true);
    renderMovies(movies);
  } catch (error) {
    console.error(error);
  }
});

// Обработчик событий на кнопку "HOME"
homeButton.addEventListener('click', async () => {
  try {
    const movies = await movieApi.getTrendingMovies();
    renderMovies(movies);
  } catch (error) {
    console.error(error);
  }
});

// Обработчик событий на кнопку "MY LIBRARY"
libraryButton.addEventListener('click', () => {
  // Здесь можно перейти на страницу с вашей коллекцией фильмов
});

async function renderMovies(data) {
  if (!data) {
  return;
  }
  
  gallery.innerHTML = data.map(movie => {
  const imageSrc = movie.poster_path ? 
  `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '';
  const genreText = movie.genres ? `${movie.genres.map(genre => movieApi.getGenreNameById(genre.id)).join(', ')} | ${movie.release_date}` : movie.release_date;
  return `
  <li data-id="${movie.id}">
    <img alt="${movie.title}" src="${imageSrc}">
    <h3>${movie.title}</h3>
    <p>${genreText}</p>
  </li>
`;
}).join('');
}

(async () => {
  try {
    const movies = await movieApi.getTrendingMovies();
    renderMovies(movies);
  } catch (error) {
    console.error(error);
  }
})();







