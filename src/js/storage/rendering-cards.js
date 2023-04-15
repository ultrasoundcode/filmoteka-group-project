const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

function searchMovies(query) {
  const filteredMovies = savedMovies.filter(movie => {
    const title = movie.title.toLowerCase();
    const queryLower = query.toLowerCase();
    return title.includes(queryLower);
  });

  renderSavedMovies(filteredMovies);
}

searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query === '') {
    renderSavedMovies(savedMovies);
    return;
  }
  searchMovies(query);
});

//

searchInput.addEventListener('keydown', event => {
  if (event.keyCode === 13) {
    const query = searchInput.value.trim();
  }
});
//
//
//
