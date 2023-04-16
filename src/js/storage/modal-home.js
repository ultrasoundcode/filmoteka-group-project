import lockModalQueue from './lock-modal-queue';
import lockModalWatched from './lock-modal-watched';
import modalBtn from './event-modal-btn';

function modalHome(card) {
    let lockQueue = false;
    let lockWatched = false;
    let storageQueue = [];
    let storageWatched = [];
    ({ lockQueue, storageQueue } = lockModalQueue.lockModalQueue(card.id));
    ({lockWatched, storageWatched} = lockModalWatched.lockModalWatched(card.id));

    modalBtn.eventModalBtn(card, storageQueue, storageWatched, lockQueue, lockWatched)

}

export default {modalHome}