import axios from 'axios';
import { BASE_URL, API_KEY } from './settings';
export default class MovieApi {
  constructor() {
    this.page = 1;
    this.genreId = '';
    this.language = 'en-US';
  }

  async getTrendingMovies() {
    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=${this.language}&page=${this.page}`;
    const response = await axios.get(url);
    // console.log(response.data.results);
    return response.data.results;
  }

  async searchMovies(query) {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=${this.language}&query=${query}`;
    const response = await axios.get(url);
    return response.data.results;
  }

  async getMovieDetails(movieId) {
    const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data;
  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
}
