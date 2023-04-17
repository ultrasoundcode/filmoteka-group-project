import axios from 'axios';
import { BASE_URL, API_KEY } from './settings';
export default class MovieApi {
  constructor() {
    this.page = 1;
    this.genreId = '';
    this.genre = '';
  }

  async getTrendingMovies() {
    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${this.page}`;
    const response = await axios.get(url);
    return response.data.results;
  }

  async getMoviesFromPagination(page) {
    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`;
    const response = await axios.get(url);
    return response.data.results;
  }

  async getMoviesForPagination(page) {
    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=${this.language}&page=${page}`;
    const response = await axios.get(url);
    return response.data.results;
  }

  async searchMovies(query) {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
    const response = await axios.get(url);
    return response.data.results;
  }

  async getMovieDetails(movieId) {
    const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data;
  }

  async getMoviesByGenres() {
    const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${this.page}&with_genres=${this.genreId}`;
    const response = await axios.get(url);
    return response.data.results;
  }
  
  async getGenres() {
    const url =`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
    console.log(url);
    const response = await axios.get(url);
    return response.data.genres;
  }
}
