import MovieApi from './apiService';

export function createMarkup(data) {
  return data.results
    .map(
      ({ id, poster_path, title, backdrop_path, genre_ids, release_date }) => {
        const genres = genre_ids.map(id => MovieApi.getGenreNameById(id));
        return `
      <li class="gallery__item" data-id="${id}">
        <img class="poster gallery__item-image" src="${poster_path}" alt="${title}"
          data-source="https://image.tmdb.org/t/p/w500${backdrop_path}" />
          <div class="gallery__description">
          <p class=" gallery__description-title film-name ">
          ${title}
        </p>
        <p class="gallery__description-genres film-genres">
          ${genres
            .map(genre => `<span class="film-genre">${genre}</span>`)
            .join('')}
          | ${release_date}
        </p>
        </div>
      </li>
    `;
      }
    )
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
