export function modalCard(movie, targetId) {
  return (layout = `<div
  class="modal__image-container"
  data-year="${movie.release_date}"
  data-action="${targetId}"
>
  <img
    src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
    alt="${movie.title} poster"
    loading="lazy"
  />
</div>
<div class="info">
  <h3 class="modal__title">${movie.title}</h3>
  <table class="modal__description description">
    <tbody>
      <tr class="description__line">
        <th class="description__head">Vote / Votes</th>
        <td class="description__data">
          <span class="description__vote">${movie.vote_average}</span> /
          <span class="description__votes">${movie.vote_count}</span>
        </td>
      </tr>
      <tr class="description__line">
        <th class="description__head">Popularity</th>
        <td class="description__data">${movie.popularity}</td>
      </tr>
      <tr class="description__line">
        <th class="description__head">Original title</th>
        <td class="description__head-titel">${movie.original_title}</td>
      </tr>
      <tr class="description__line">
        <th class="description__head">Genre</th>
        <td class="description__data"></td>
      </tr>
    </tbody>
  </table>
  <p class="modal__about">About</p>
  <p class="modal__overview">${movie.overview}</p>
  <div class="modal__button-container">
    <button class="modal__button addWatched" type="button" data-action="id">
      Add to Watched
    </button>
    <button class="movie-modal__button addQueue" type="button" data-action="id">
      Add to Queue
    </button>
  </div>
</div>`);
}
