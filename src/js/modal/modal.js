import MovieApi from '../apiService';
import { refs } from '../refs';
import { modalCard } from './modal-card-layout';
import {
  closeModalOnBgClick,
  closeModalOnEsc,
  closeModalOnBtnClick,
} from './modal-close-functions';
import { onAddToQueueClick, onAddToWatchedClick } from './modal-btns-functions';

const api = new MovieApi();
refs.gallery.addEventListener('click', onGalleryCardClick);

async function onGalleryCardClick(e) {
  let targetId = e.target.closest('li').attributes[1].value;
  api.getMovieDetails(targetId).then(movie => {
    refs.modalContent.innerHTML = modalCard(movie);
    refs.modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    refs.modalContent.addEventListener('click', e => {
      if (e.target.matches('.addWatched')) {
        onAddToWatchedClick(movie);
      } else if (e.target.matches('.addQueue')) {
        onAddToQueueClick(movie);
      }
    });
  });
}

refs.closeBtn.addEventListener('click', closeModalOnBtnClick);
window.addEventListener('click', closeModalOnBgClick);
document.addEventListener('keydown', closeModalOnEsc);
