
import MovieApi from '../apiService';

export function createMarkup(data) {
  return data.results.map(({ id, poster_path, title, backdrop_path, genre_ids, release_date }) => {
    const genres = genre_ids.map(id => MovieApi.getGenreNameById(id));
    return `
      <li data-id="${id}">
        <img class="poster" src="${poster_path}" alt="${title}"
          data-source="https://image.tmdb.org/t/p/w500${backdrop_path}" />
        <h3 class="film-name ">
          ${title}
        </h3>
        <p class="film-genres">
          ${genres.map((genre) => `<span class="film-genre">${genre}</span>`).join('')}
          | ${release_date}
        </p>
      </li>
    `;
  }).join('');
}

