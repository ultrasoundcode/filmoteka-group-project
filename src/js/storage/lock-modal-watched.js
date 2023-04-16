import storageGetWatched from './get-watched';

function lockModalWatched(idFilm) {
    let lockWatched = false;
    let storageWatched = [];

    storageWatched = storageGetWatched.getWatched();
    
    if (storageWatched) {
        if (!storageWatched.find(item => item.id === idFilm)) {
            lockWatched = true;
        }
    } else {
        storageWatched = [];
        lockWatched = true;
    }

    return {lockWatched, storageWatched}
}

export default {lockModalWatched}