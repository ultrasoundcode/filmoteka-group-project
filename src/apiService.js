import axios from 'axios';
import { BASE_URL, API_KEY } from './settings';

export default class MovieApi {
    constructor() {
        this.query = '';
        this.page = 1;
        this.genre = '';
        this.genreId = '';
        this.language = 'en-US';
        this.genreList = {};
    }

    async getGenreList() {
        const url = `${this.BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
        const response = await axios.get(url);
        response.data.genres.forEach(genre => {
          this.genreList[genre.id] = genre.name;
        console.log(genre.name);
        });
    }
    
    getGenreNameById(id) {
        console.log(response.genre_ids)
        return this.genreList[id];
    }
    

    async getTrendingMovies() {
        const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=${this.language}&page=${this.page}`;
        const response = await axios.get(url);
        console.log(response.data.results[0].genre_ids)
        return response.data.results;
    }

    async searchMovies(query) {
        const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=${this.language}&query=${this.query}`;
        const response = await axios.get(url);
        return response.data.results;
    }

    async getMovieDetails(movieId) {
        const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;
        const response = await axios.get(url);
        return response.data;
    }
}







// async getTrendingMovies() {
//     const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=${this.language}&page=${this.page}`;
//     const response = await axios.get(url);
//     if (!response.status === 200) {
//       throw new ErrorEvent();
//     }
//     const data = response.data;
//     const trendingMovies = data.results;
//     return trendingMovies;
//  } 

//  async getSearchMovies() {
//     const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=${this.language}&query=${this.query}`;
//     const response = await axios.get(url);
//     if (!response.status === 200) {
//       throw new Error();
//     }
//     const data = response.data;
//     const searchedMovies = data.results;
//     return searchedMovies;
//  }

//  async getMoviesByGenre() {
//       const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${this.page}&with_genres=${this.genreId}`;
//       const response = await axios.get(url);
//       if (!response.status === 200) {
//         throw new Error();
//       }
//       const data = response.data;
//       const searchedMovies = data.results;
//       return searchedMovies;
//  }
  
//  async getGenres() {
//       const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=${this.language}`;
//       const response = await axios.get(url);
//       if (!response.status === 200) {
//         throw new Error();
//       }
//       const data = response.data;
//       const genres = data.genres;
//       return genres;
//  }   

//  async getMovieById(movieId) {
//     const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;
//     const response = await axios.get(url);
//     if (!response.status === 200) {
//       throw new Error();
//     }
//     const movieById = response.data;
//     return movieById;
//  }

//  async getNormalizer(data) {
//       const moviesArr = await data;
//       const genresArr = await this.getGenres();
  
//       const findGenreName = (id) => {
//       const data = genresArr.find((gener) => id === gener.id);
//       return data.name;
//       };
  
//       const updateMovie = (movie) => {
//       const genres = [];
//       const genresIdArr = movie.genre_ids;
//       genresIdArr.forEach((id) => {
//       const genreName = findGenreName(id);
//       genres.push(genreName);
//       });

//       const release_date = movie.release_date
//       ? movie.release_date.split('-')[0]
//       : 'NA';

//       const poster_path = movie.poster_path
//       ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
//       : noposter;
//       const movieUpdate = { ...movie, genres, release_date, poster_path };
//       return movieUpdate;
//       };
//       const updatedMoviesarr = moviesArr.map((movie) => updateMovie(movie));
//       return updatedMoviesarr;
//  }
// // популярные фильмы, готовые к рендеру
//  async getPopularMovies() {
//   const getedPopularMovies = await this.getTrendingMovies();
//   const normalizedMovies = await this.getNormalizer(getedPopularMovies);
//   return normalizedMovies;
//  }
// // фильмы из поиска, готовые к рендеру
//  async searchMovies() {
//   const getedMovieBySearch = await this.getSearchMovies();
//   const normalizedMovies = await this.getNormalizer(getedMovieBySearch);
//   return normalizedMovies;
//  }
// // фильмы по жанрам, готовые к рендеру
//  async getMovieByGenre(genre) {
//   const genresArray = await this.getGenres();
//   this.genre = genre;
//   const findId = genresArray
//     .filter(data => data.name === this.genre)
//     .map(obj => obj.id);
//   this.genreId = findId;
//   const getedMoviesByGenre = await this.getMoviesByGenre(genre);
//   const normalizedMovies = await this.getNormalizer(getedMoviesByGenre);
//   return normalizedMovies;
//  }

//  async renderTrendingMovies() {
//   try {
//     const normalizedMovies = await this.getPopularMovies();
//     this.renderMovieCard(normalizedMovies);
//   } catch (error) {
//     Notify.failure('Oops! Something went wrong!');
//   }
//  }

//  async renderMoviesByGenre(genre) {
//   try {
//     const normalizedMovies = await this.getMovieByGenre(genre);
//     this.renderMovieCard(normalizedMovies);
//   } catch (error) {
//     Notify.failure('Oops! Something went wrong!');
//   }
//  }

// renderMovieCard(results) {
//   const moviesMarkup = createMarkup(results);
//   refs.gallery.insertAdjacentHTML('beforeend', moviesMarkup);
// }

// increamentPage() {
//   this.page += 1;
// }

// resetPage() {
//   this.page = 1;
// }

// get query() {
//   return this._query;
//  }

// set query(newQuery) {
//   this._query = newQuery;
// }