import { refs } from './refs';
import MovieApi from './apiService';

// Рендер карточек с фильмами
export function renderMovies(data) {
  if (!data) {
    return;
  }
  const renderMovies = data.map(createRenderMovies).join('');
  refs.gallery.innerHTML = renderMovies;
}

// Создания HTML разметки для карточки
function createRenderMovies(movie) {
  const imageSrc = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '';
  const genres = generateGenresFromGetApi(movie.genre_ids);
  const year = movie.release_date
    ? movie.release_date.split('-')[0]
    : 'n/a';
  return `
  <li data-id="${movie.id}">
      <img alt="${movie.title}" src="${imageSrc}">
    <h3>${movie.title}</h3>
    <p>${genres} | ${year}</p>
  </li>
`;
}

// Генерируем жанры через get-запрос
async function generateGenresFromGetApi(genre) {
  const movieApi = new MovieApi();
  const genresArray = await movieApi.getGenres();
  movieApi.genre = genre;
  const findId = genresArray
     .filter(data => data.name === this.genre)
     .map(el => el.id);
  movieApi.genreId = findId;
  const moviesByGenre = await movieApi.getMoviesByGenres(genre);
  return moviesByGenre;
}