import { refs } from './refs';
import MovieApi from './apiService';

// Рендер карточек с фильмами
export function renderMovies(data) {
  if (!data) {
    return;
  }
  Promise.all(data.map(createRenderMovies)).then(htmlArray => {
    refs.gallery.innerHTML = htmlArray.join('');
  });
}

// Создания HTML разметки для карточки
async function createRenderMovies(movie) {
  const imageSrc = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '';
    const genres = await generateGenresFromGetApi(movie.genre_ids);
    const year = movie.release_date ? movie.release_date.split('-')[0] : 'n/a';
     return `
      <li data-id="${movie.id}">
        <img alt="${movie.title}" src="${imageSrc}">
        <h3>${movie.title}</h3>
        <p>${genres.slice(0, 2).concat('Other').join(', ')} | ${year}</p>
      </li>
    `;
};

// Генерируем жанры через get-запрос
async function generateGenresFromGetApi(genreIds) {
  const movieApi = new MovieApi();
  const genresArray = await movieApi.getGenres();
    const genres = genreIds
    .map(genreId => {
    const genre = genresArray.find(({id}) => id === genreId).name;
    return genre ;
    })
  
  return genres;
}
