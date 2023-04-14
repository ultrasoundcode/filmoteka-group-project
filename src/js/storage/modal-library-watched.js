import lockModalQueue from './lock-modal-queue';
import modalBtn from './event-modal-btn';

function modalLibraryWatched(card) {
    let lockQueue = false;
    let lockWatched = false;
    let storageQueue = [];
    let storageWatched = [];

    ({lockQueue, storageQueue} = lockModalQueue.lockModalQueue(card));

    modalBtn.eventModalBtn(card, storageQueue, storageWatched, lockQueue, lockWatched)

}

export default {modalLibraryWatched}