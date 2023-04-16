import storageAddQueue from './add-queue';
import storageAddWatched from './add-watched';
import { refs } from '../refs';

function eventModalBtn(card, storageQueue, storageWatched, lockQueue, lockWatched) {

    let colorLockBtn = 'background-color: red';  // цвет заблокированных кнопок модального окна
                                                        //("Add to watched" и "Add to queue")

    function btnAddQueue(event) {
            storageQueue.push(card);
            storageAddQueue.addQueue(storageQueue);
            lockQueue = false;
            refs.btnAddQueue.style = colorLockBtn;
            refs.btnAddQueue.removeEventListener('click', btnAddQueue);
    }

    function btnAddWatched(event) {
            storageWatched.push(card);
            storageAddWatched.addWatched(storageWatched);
            lockWatched = false;
            refs.btnAddWatched.style = colorLockBtn;
            refs.btnAddWatched.removeEventListener('click', btnAddWatched);
    }

    if (lockQueue) {
        refs.btnAddQueue.addEventListener('click', btnAddQueue)
    } else {
        refs.btnAddQueue.style = colorLockBtn
    }
    
    if (lockWatched) {
        refs.btnAddWatched.addEventListener('click', btnAddWatched)
    } else {
        refs.btnAddWatched.style = colorLockBtn
    }
}

export default {eventModalBtn}