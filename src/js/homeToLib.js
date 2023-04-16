const homeBtn = document.querySelector('.home-page');
const element1 = document.querySelector('.page-header__movie-menu');
homeBtn.addEventListener('click', function () {
  element1.classList.remove('is-hidden');
  // element2.classList.add('is-hidden');
  // element3.classList.add('is-hidden');
});
const libraryBtn = document.querySelector('.library-page');
libraryBtn.addEventListener('click', function () {
  element1.classList.add('is-hidden');
  // element2.classList.remove('is-hidden');
  // element3.classList.remove('is-hidden');
});
