import { refs } from './refs';
import genresData from '../genres.json';
export const genres = genresData.genres;

// Рендер карточек с популярными фильмами
export async function renderMovies(data) {
  if (!data) {
    return;
  }
  refs.gallery.innerHTML = data
    .map(movie => {
      const imageSrc = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : '';
      const genres = genersForFilmCard(movie.genre_ids);
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
    })
    .join('');
}
// Генерируем жанры по id-шнику
function genersForFilmCard(arrayOfGenersID) {
  const arrayOfGenres = arrayOfGenersID.map(id => {
    return genres.find(genre => genre.id === id).name;
  });
  const result =
    arrayOfGenres.length > 2
      ? arrayOfGenres.splice(0, 2).concat('Other').join(', ')
      : arrayOfGenres.join(', ');
  return result;
}
