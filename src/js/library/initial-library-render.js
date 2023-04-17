import { refs } from '../refs';
import { getAllMoviesFromLocalStorage } from '../storage/ls-data-services';
import { renderMoviesDetailed } from './fnRenderMoviesDetailed';

refs.libraryBtn.addEventListener('click', onMyLibraryClick);
// Рендер всех, неотфильтрованных фильмов из Local Storage при нажатии на My Library
function onMyLibraryClick() {
  renderMoviesDetailed(getAllMoviesFromLocalStorage());
}
