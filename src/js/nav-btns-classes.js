import { refs } from './refs';

refs.homeBtn.addEventListener('click', function () {
  refs.homeBtn.classList.add('active');
  refs.libraryBtn.classList.remove('active');

  refs.libButtons.classList.add('is-hidden');
  refs.searchInput.classList.remove('is-hidden');
  refs.watchedBtn.classList.remove('active');
  refs.queueBtn.classList.remove('active');
});
refs.libraryBtn.addEventListener('click', function () {
  refs.libraryBtn.classList.add('active');
  refs.homeBtn.classList.remove('active');

  refs.libButtons.classList.remove('is-hidden');
  refs.searchInput.classList.add('is-hidden');
});
