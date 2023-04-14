import storageGetQueue from './get-queue';

function lockModalQueue(card) {
    let idFilm = card.id;
    let lockQueue = false;
    let storageQueue = [];

    storageQueue = storageGetQueue.getQueue();
    
    if (storageQueue) {
        if (!storageQueue.find(item => item.id === idFilm)) {
            lockQueue = true;
        }
    } else {
        storageQueue = [];
        lockQueue = true
    }
    
    return {lockQueue, storageQueue}
}

export default {lockModalQueue}