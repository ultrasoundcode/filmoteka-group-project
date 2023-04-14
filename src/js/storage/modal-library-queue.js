import lockModalWatched from './lock-modal-watched';
import modalBtn from './event-modal-btn';

function modalLibraryQueue(card) {
    let lockQueue = false;
    let lockWatched = false;
    let storageQueue = [];
    let storageWatched = [];

    ({lockWatched, storageWatched} = lockModalWatched.lockModalWatched(card));

    modalBtn.eventModalBtn(card, storageQueue, storageWatched, lockQueue, lockWatched)

}

export default {modalLibraryQueue}