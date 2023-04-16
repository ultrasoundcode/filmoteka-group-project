import MovieApi from '../apiService';
import { refs } from '../refs';
import { modalCard } from './modal-card-layout';
import {
  closeModalOnBgClick,
  closeModalOnEsc,
  closeModalOnBtnClick,
} from './modal-close-functions';
const api = new MovieApi();

refs.gallery.addEventListener('click', e => {
  let targetId = e.target.closest('li').attributes[0].value;
  api.getMovieDetails(targetId).then(movie => {
    refs.modalContent.innerHTML = modalCard(movie, targetId);
    refs.modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
});

refs.closeBtn.addEventListener('click', closeModalOnBtnClick);
window.addEventListener('click', closeModalOnBgClick);
document.addEventListener('keydown', closeModalOnEsc);
