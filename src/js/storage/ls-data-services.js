function addToLocalStorage(tag, movieData, key) {
  let movies = JSON.parse(localStorage.getItem(tag)) || [];

  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, JSON.stringify([]));
  }
  if (tag === 'watched') {
    addToWatched(movies, movieData, tag);
  }
  if (tag === 'queue') {
    addToQueue(movies, movieData, tag);
  }
}
function getFromLocalStorage(tag) {
  let storedMovies = JSON.parse(localStorage.getItem(tag)) || [];
  return storedMovies;
}
function getAllMoviesFromLocalStorage() {
  const watchedMovies = getFromLocalStorage('watched');
  const queueMovies = getFromLocalStorage('queue');
  const allMovies = [...watchedMovies, ...queueMovies];
  const uniqueMovies = [...new Set(allMovies.map(movie => movie.id))].map(id =>
    allMovies.find(movie => movie.id === id)
  );
  return uniqueMovies;
}
function addToWatched(movies, movieData, tag) {
  const queueMovies = JSON.parse(localStorage.getItem('queue')) || [];
  const movieIndex = movies.findIndex(movie => movie.id === movieData.id);
  const queueMovieIndex = queueMovies.findIndex(
    movie => movie.id === movieData.id
  );
  if (movieIndex === -1 && queueMovieIndex === -1) {
    movies.push(movieData);
    localStorage.setItem(tag, JSON.stringify(movies));
  } else {
    console.log('Movie is already in the array');
  }
}
function addToQueue(movies, movieData, tag) {
  const watchedMovies = JSON.parse(localStorage.getItem('watched')) || [];
  const movieIndex = movies.findIndex(movie => movie.id === movieData.id);
  const watchedMovieIndex = watchedMovies.findIndex(
    movie => movie.id === movieData.id
  );
  if (movieIndex === -1 && watchedMovieIndex === -1) {
    movies.push(movieData);
    localStorage.setItem(tag, JSON.stringify(movies));
  } else {
    console.log('Movie is already in the array');
  }
}
function checkMovieLocationById(id) {
  const watchedMovies = JSON.parse(localStorage.getItem('watched')) || [];
  const queueMovies = JSON.parse(localStorage.getItem('queue')) || [];
  const watchedIndex = watchedMovies.findIndex(
    movie => movie.id === Number(id)
  );
  const queueIndex = queueMovies.findIndex(movie => movie.id === Number(id));

  if (watchedIndex !== -1) {
    return 'watched';
  } else if (queueIndex !== -1) {
    return 'queue';
  } else {
    return null;
  }
}

export {
  addToLocalStorage,
  getAllMoviesFromLocalStorage,
  getFromLocalStorage,
  addToQueue,
  addToWatched,
  checkMovieLocationById,
};
