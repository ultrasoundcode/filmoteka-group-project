import Pagination from 'tui-pagination';
import { refs } from './refs';
import MovieApi from './apiService';
import { renderMovies } from './card-film-render';
import {
  renderMoviesByPageNumber,
  renderQueueMoviesByPageNumber,
  renderWatchedMoviesByPageNumber,
} from './library/initial-library-render';
import {
  getAllMoviesFromLocalStorage,
  getFromLocalStorage,
} from './storage/ls-data-services';
import {
  makeHomeActive,
  makeMyLibraryActive,
} from './nav-bar/nav-btns-functions';

const pagination = new Pagination(refs.pagContainer, {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
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

const movieApi = new MovieApi();

movieApi.getMoviesCount().then(count => {
pagination.reset(count);
});

//   Home page and movie search pagination
refs.searchInput.addEventListener('input', async () => {
  const query = refs.searchInput.value.trim();
  const totalItems = query
    ? await movieApi.getSearchMoviesCount(query)
    : await movieApi.getMoviesCount(query);
  pagination.reset(totalItems);
});

refs.homeBtn.addEventListener('click', async () => {
  makeHomeActive();
  pagination.reset(await movieApi.getMoviesCount());
});

pagination.on('beforeMove', async event => {
    const query = refs.searchInput.value.trim();
    if (query) {
      await movieApi.getSearchMoviesForPagination(query, event.page).then(r => {
      renderMovies(r);
      });
    } else {
      await movieApi.getTrendingMoviesForPagination(event.page).then(r => {
      renderMovies(r);
      });
    }
});

//   Library pagination
refs.libraryBtn.addEventListener('click', activateLibraryPagination);
refs.queueBtn.addEventListener('click', activateQeueuePagination);
refs.watchedBtn.addEventListener('click', activateWatchedPagination);

function activateLibraryPagination() {
  refs.watchedBtn.classList.remove('active');
  refs.queueBtn.classList.remove('active');
  pagination.reset(getAllMoviesFromLocalStorage().length);

  pagination.on('beforeMove', async event => {
    makeMyLibraryActive();
    refs.homeBtn.classList.remove('active');
    renderMoviesByPageNumber(event.page);
  });
}

function activateQeueuePagination() {
  pagination.reset(getFromLocalStorage('queue').length);
  pagination.on('beforeMove', async event => {
    renderQueueMoviesByPageNumber(event.page);
  });
}

function activateWatchedPagination() {
  pagination.reset(getFromLocalStorage('watched').length);
  pagination.on('beforeMove', async event => {
    renderWatchedMoviesByPageNumber(event.page);
  });
}





// import Pagination from 'tui-pagination';
// import { refs } from './refs';
// import MovieApi from './apiService';
// import { renderMovies } from './card-film-render';
// import {
//   renderMoviesByPageNumber,
//   renderQueueMoviesByPageNumber,
//   renderWatchedMoviesByPageNumber,
// } from './library/initial-library-render';
// import {
//   getAllMoviesFromLocalStorage,
//   getFromLocalStorage,
// } from './storage/ls-data-services';
// import {
//   makeHomeActive,
//   makeMyLibraryActive,
// } from './nav-bar/nav-btns-functions';

// const movieApi = new MovieApi();

// const pagination = new Pagination(refs.pagContainer, {
//   totalItems: 0,
//   itemsPerPage: 20,
//   visiblePages: 5,
//   page: 1,
//   centerAlign: true,
//   firstItemClassName: 'tui-first-child',
//   lastItemClassName: 'tui-last-child',
//   template: {
//     page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//     currentPage:
//       '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//     moveButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</a>',
//     disabledMoveButton:
//       '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</span>',
//     moreButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
//       '<span class="tui-ico-ellip">...</span>' +
//       '</a>',
//   },
// });
// let totalMovies = 400;
// pagination.reset(totalMovies);
// // Home page pagination
// refs.homeBtn.addEventListener('click', activateHomePagination);

// function activateHomePagination() {
//   pagination.reset(400);
//   pagination.on('beforeMove', async event => {
//     const query = refs.searchInput.value.trim();
//     if (query) {
//       makeHomeActive();
//       await movieApi.getSearchMoviesForPagination(query, event.page).then(r => {
//         renderMovies(r);
//       });
//     } else {
//       makeHomeActive();
//       await movieApi.getMoviesForPagination(event.page).then(r => {
//         renderMovies(r);
//       });
//     }
//   });
// }

// // // Library pagination
// refs.libraryBtn.addEventListener('click', activateLibraryPagination);
// function activateLibraryPagination() {
//   refs.watchedBtn.classList.remove('active');
//   refs.queueBtn.classList.remove('active');
//   pagination.reset(getAllMoviesFromLocalStorage().length);
//   pagination.on('beforeMove', async event => {
//     makeMyLibraryActive();

//     refs.homeBtn.classList.remove('active');

//     renderMoviesByPageNumber(event.page);
//   });
// }
// refs.queueBtn.addEventListener('click', activateQeueuePagination);
// function activateQeueuePagination() {
//   pagination.reset(getFromLocalStorage('queue').length);
//   pagination.on('beforeMove', async event => {
//     renderQueueMoviesByPageNumber(event.page);
//   });
// }
// refs.watchedBtn.addEventListener('click', activateWatchedPagination);
// function activateWatchedPagination() {
//   pagination.reset(getFromLocalStorage('watched').length);
//   pagination.on('beforeMove', async event => {
//     renderWatchedMoviesByPageNumber(event.page);
//   });
// }
