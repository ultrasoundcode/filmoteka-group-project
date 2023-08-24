import axios from 'axios';
import { BASE_URL, API_KEY } from './settings';
import { showLoader, hideLoader } from './loader';

export default class MovieApi {
  constructor() {
    this.page = 1;
    this.genreId = '';
    this.genre = '';
    this.searchQuery = '';
  }

  async getTrendingMovies() {
    showLoader();
    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${this.page}`;
    const response = await axios.get(url);
    hideLoader();
    return response.data.results;
  }
 
  async getTrendingMoviesForPagination(page) {
    showLoader();
    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`;
    const response = await axios.get(url);
    hideLoader();
    return response.data.results;
  }

  async getMoviesCount() {
    showLoader();
    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios.get(url);
    hideLoader();
    return response.data.total_results;
  }

  async getSearchMovies(query) {
    showLoader();
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
    const response = await axios.get(url);
    hideLoader();
    return response.data.results;
  }

  async getSearchMoviesForPagination(query, page) {
    showLoader();
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;
    const response = await axios.get(url);
    hideLoader();
    return response.data.results;
  }

  async getSearchMoviesCount(query) {
    showLoader();
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
    const response = await axios.get(url);
    hideLoader();
    return response.data.total_results;
  }

  async getMovieDetails(movieId) {
    showLoader();
    const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;
    const response = await axios.get(url);
    hideLoader();
    return response.data;
  }

  async getGenres() {
    showLoader();
    const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
    const response = await axios.get(url);
    hideLoader();
    return response.data.genres;
  }
}




// import axios from 'axios';
// import { BASE_URL, API_KEY } from './settings';
// import { showLoader, hideLoader } from './loader';

// export default class MovieApi {
//   constructor() {
//     this.page = 1;
//     this.genreId = '';
//     this.genre = '';
//     this.searchQuery = '';
//   }

//   async getTrendingMovies() {
//     showLoader();
//     const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${this.page}`;
//     const response = await axios.get(url);
//     hideLoader();
//     return response.data.results;
//   }
//   async getData() {
//     showLoader();
//     const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${this.page}`;
//     const response = await axios.get(url);
//     hideLoader();
//     return response.data;
//   }
//   async getMoviesForPagination(page) {
//     showLoader();
//     const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`;
//     const response = await axios.get(url);
//     hideLoader();
//     return response.data.results;
//   }

//   async getTrendingMoviesForPagination(page) {
//     showLoader();
//     const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`;
//     const response = await axios.get(url);
//     hideLoader();
//     return response.data.results;
//   }

//   async searchMovies(query) {
//     showLoader();
//     const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
//     const response = await axios.get(url);
//     hideLoader();
//     return response.data.results;
//   }

//   async getSearchMoviesForPagination(query, page) {
//     showLoader();
//     const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;
//     const response = await axios.get(url);
//     hideLoader();
//     return response.data.results;
//   }

//   async getMovieDetails(movieId) {
//     showLoader();
//     const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;
//     const response = await axios.get(url);
//     hideLoader();
//     return response.data;
//   }

//   async getGenres() {
//     showLoader();
//     const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
//     const response = await axios.get(url);
//     hideLoader();
//     return response.data.genres;
//   }
//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }
// }
