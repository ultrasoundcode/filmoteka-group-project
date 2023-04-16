import renderMovies from '../card-film';
import { getRefs } from '../refs';

export const renderGallery = function (objects) {
  //добавляет в конец по шаблону карточки фильмов
  const refs = getRefs();
  refs.galleryItems.insertAdjacentHTML('beforeend', renderMovies(objects));
};

export const renderAllGallery = function (object) {
  //добавляет в конец по шаблону карточки фильмов
  const refs = getRefs();
  refs.galleryItems.innerHTML = '';
  object.forEach(film => renderGallery(film)); // перебирает обьект и выводит карточки фильмов
};
export const renderAddToGallery = function (object) {
  //добавляет в конец к текущему отображению документа карточки
  object.forEach(film => renderGallery(film)); // перебирает обьект и выводит карточки фильмов
};
