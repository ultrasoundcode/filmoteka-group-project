import { refs } from '../refs';

function closeModalOnEsc(event) {
  if (event.keyCode === 27) {
    refs.modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

function closeModalOnBtnClick() {
  refs.modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

function closeModalOnBgClick(event) {
  if (event.target == refs.modal) {
    refs.modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

export { closeModalOnEsc, closeModalOnBtnClick, closeModalOnBgClick };
