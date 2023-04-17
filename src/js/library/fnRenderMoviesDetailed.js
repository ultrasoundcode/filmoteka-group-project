import genresData from '../../genres.json';
import { refs } from '../refs';
const genres = genresData.genres;

async function renderMoviesDetailed(data) {
  if (!data) {
    return;
  }
  refs.gallery.innerHTML = data
    .map(movie => {
      const imageSrc = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : '';
      const genres = genersForFilmCard(makeGenresArray(movie));

      const year = movie.release_date
        ? movie.release_date.split('-')[0]
        : 'n/a';
      return `
  <li data-id="${movie.id}" class='gallery__item'>
      <img class='gallery__item-image' alt="${movie.title}" src="${imageSrc}">
    <div class='gallery__item-description'>
    <h3 class='gallery__item-description-title' >${movie.title}</h3>
    <p class='gallery__item-description-genres' >${genres} | ${year}</p></div>
  </li>
`;
    })
    .join('');
}

// Массив для функции genersForFilmCard
function makeGenresArray(movie) {
  let genresIdsArray = [];
  movie.genres.forEach(genre => {
    genresIdsArray.push(genre.id);
  });
  return genresIdsArray;
}
// Обработка ID жанров и вывод их наименований для renderMoviesDetailed
function genersForFilmCard(genreIds) {
  const arrayOfGenres = genreIds.map(id => {
    return genres.find(genre => genre.id === id).name;
  });
  const result =
    arrayOfGenres.length > 2
      ? arrayOfGenres.splice(0, 2).concat('Other').join(', ')
      : arrayOfGenres.join(', ');
  return result;
}

export { makeGenresArray, genersForFilmCard, renderMoviesDetailed };
