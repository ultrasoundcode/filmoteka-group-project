import { refs } from './refs';
import MovieApi from './apiService';
import noPoster from '../img/no-poster.jpg';
import '../sass/_gallery.scss';

// Рендер карточек с фильмами
export async function renderMovies(data) {
  if (!data) {
    return;
  }

  const movieApi = new MovieApi();
  const genresArray = await movieApi.getGenres();

refs.gallery.innerHTML = data
      .map(movie => {
      const imageSrc = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : noPoster;
      const genres = genersForFilmCard(movie.genre_ids, genresArray);
      const year = movie.release_date ? movie.release_date.split('-')[0] : 'n/a';
      return `
      <li class='gallery__item' data-id="${movie.id}">
       <img class='gallery__item-image' alt="${movie.title}" src="${imageSrc}">
       <div class='gallery__item-description'> 
          <h3 class='gallery__item-description-title'>
          ${movie.title}
          </h3>
          <p class='gallery__item-description-genres'>
           ${genres.slice(0, 2).concat('...').join(', ')}
           | ${year}
          </p> 
        </div>
       </li>
      `;
      })
      .join('');
  }

// Генерируем жанры по id-шнику
function genersForFilmCard(arrayOfGenersID, genresArray) {
  const arrayOfGenres = arrayOfGenersID.map(id => genresArray.find(genre => genre.id === id).name);
  return arrayOfGenres;
}
