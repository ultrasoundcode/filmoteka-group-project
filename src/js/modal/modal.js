import MovieApi from '../apiService';
import { refs } from '../refs';
import { modalCard } from './modal-card-layout';
import {
  closeModalOnBgClick,
  closeModalOnEsc,
  closeModalOnBtnClick,
} from './modal-close-functions';
import { onModalBtnClick } from './modal-btns-functions';
import { toggleModalBtnsDisplay } from './modal-btns-functions';

const api = new MovieApi();
refs.gallery.addEventListener('click', onGalleryCardClick);

async function onGalleryCardClick(e) {
  let targetId = e.target.closest('li').attributes[1].value;
  api.getMovieDetails(targetId).then(movie => {
    refs.modalContent.innerHTML = modalCard(movie);
    refs.modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    const addToWatchedBtn = refs.modalContent.querySelector('.addWatched');
    const addToQueueBtn = refs.modalContent.querySelector('.addQueue');

    toggleModalBtnsDisplay(targetId, addToWatchedBtn, addToQueueBtn);

    refs.modalContent.addEventListener('click', function (e) {
      onModalBtnClick(e, movie);
    });
  });
}

refs.closeBtn.addEventListener('click', closeModalOnBtnClick);
window.addEventListener('click', closeModalOnBgClick);
document.addEventListener('keydown', closeModalOnEsc);
