import Pagination from 'tui-pagination';
import { refs } from './refs';
import MovieApi from './apiService';
import { renderMovies } from './card-film-render';

const movieApi = new MovieApi();

let currentPage = 1;
let query = '';

const pagination = new Pagination(refs.pagContainer, {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: currentPage,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
});

pagination.reset(400);

pagination.on('beforeMove', async event => {
  currentPage = event.page;
  let movies;
  if (query) {
    movies = await movieApi.getSearchMoviesForPagination(currentPage);
  } else {
    movies = await movieApi.getTrendingMoviesForPagination(currentPage);
  }
  renderMovies(movies);
});

