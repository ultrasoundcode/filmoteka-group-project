import storageAddQueue from './add-queue';
import storageAddWatched from './add-watched';

function eventModalBtn(card, storageQueue, storageWatched, lockQueue, lockWatched) {

    let colorLockBtn = 'background-color: aliceblue;';  // цвет заблокированных кнопок модального окна
                                                        //("Add to watched" и "Add to queue")
    
    const btnAddQueue = document.querySelector('.addQueue');
    const btnAddWatched = document.querySelector('.addWatched');
    
    function btnAddAddQueue(event) {
            storageQueue.push(card);
            storageAddQueue.addQueue(storageQueue);
            lockQueue = false;
            btnAddQueue.style = colorLockBtn;
            btnAddQueue.removeEventListener('click', btnAddAddQueue);
    }

    function btnAddAddWatched(event) {
            storageWatched.push(card);
            storageAddWatched.addWatched(storageWatched);
            lockWatched = false;
            btnAddWatched.style = colorLockBtn;
            btnAddWatched.removeEventListener('click', btnAddAddWatched);
    }

    if (lockQueue) {
        btnAddQueue.addEventListener('click', btnAddAddQueue)
    } else {
        btnAddQueue.style = colorLockBtn
    }
    
    if (lockWatched) {
        btnAddWatched.addEventListener('click', btnAddAddWatched)
    } else {
        btnAddWatched.style = colorLockBtn
    }
}

export default {eventModalBtn}