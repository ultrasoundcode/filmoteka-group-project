import Pagination from 'tui-pagination';
import refs from './refs';
import { API_KEY }  from './settings';
import MovieApi from './apiService';

const movieApi = new MovieApi();

const paginationContainer = document.querySelector('.tui-pagination');
let currentPage = 1;
const pagination = new Pagination(paginationContainer, {
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

pagination.on('beforeMove', async event => {
  const currentPage = event.page;
  movieApi.resetPage();
  movieApi.incrementPage(currentPage);
  const movies = await movieApi.getTrendingMovies();
});






