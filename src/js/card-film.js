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
        : 'https://upload.wikimedia.org/wikipedia/commons/d/dc/No_Preview_image_2.png';
        const genres = genersForFilmCard(movie.genre_ids);
        const year = movie.release_date
          ? movie.release_date.split('-')[0]
          : 'n/a';
        return `
    <li class="gallery__item" data-id="${movie.id}">
      <img class="gallery__item-image" alt="${movie.title}" src="${imageSrc}">
      <div class="gallery__item-description">
      <p class="gallery__item-description-title">${movie.title}</p>
      <p class="gallery__item-description-genres">${genres} | ${year}</p>
      </div>
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
