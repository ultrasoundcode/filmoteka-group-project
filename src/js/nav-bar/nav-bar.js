import { refs } from '../refs';
import { onHomeBtn, makeMyLibraryActive } from './nav-btns-functions';

// Обработчик событий на кнопку "HOME"
refs.homeBtn.addEventListener('click', onHomeBtn);
// Обработчик событий на кнопку "MY LIBRARY"
refs.libraryBtn.addEventListener('click', makeMyLibraryActive);
// Обработчик событий на логотип
refs.logo.addEventListener('click', onHomeBtn);
