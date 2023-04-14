import { refs } from '../refs';

refs.libButtons.addEventListener('click', onLibraryBtnClick);
function onLibraryBtnClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const currentActiveTarget = refs.libButtons.querySelector('.active');

  let selectedTarget = event.target;
  selectedTarget.classList.add('active');

  if (currentActiveTarget) {
    currentActiveTarget.classList.remove('active');
  }
}
