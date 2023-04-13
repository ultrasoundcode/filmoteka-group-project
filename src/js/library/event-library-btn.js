import storageGetQueue from '../storage/get-queue';
import storageGetWatched from '../storage/get-watched';

function btnLibrary() {

    let storageQueue = [];
    let storageWatched = [];

    const btnGetQueue = document.querySelector('.getQueue');
    const btnGetWatched = document.querySelector('.getWatched');

    function btnQueue(event) {
        storageQueue = storageGetQueue.getQueue();
        //-- функция фильтрации/поиска фильмов на этой странице
        //-- функции рендеринга карточек фильмов, пагинации и так далее
        //-- слушатель события "открыть модальное окно фильма (click по карточке)"
        //      его колбэк должен запустить функцию: btnQueue.modalLibraryQueue(filmModal));
        //                             импорт: import btnQueue from './js/storage/modal-library-queue';                       
        console.log(storageQueue)
    }

    function btnWatched(event) {
        storageWatched = storageGetWatched.getWatched();
        //  аналогично  function btnQueue
    }


    btnGetQueue.addEventListener('click', btnQueue);
    btnGetWatched.addEventListener('click', btnWatched)

}

export default {btnLibrary}
