
    /////// Предлагаю/cчитаю, что ПОИСК должен работать на всех страницах, в том числе и на QUEUE и WATCHED
    /////////////
        //
        // Выполнены задания: F14, F15, F18, F19  - осталось их проверить на реальной базе фильмов
        //
        // HTML
        // - привязка к кнопкам - через классы.Если будет нужно поменять имена классов - я сделаю.
        //    <button class="addWatched">Add to watched</button>
        //    <button class="addQueue">Add to queue</button>
        //    <button class="getWatched">watched</button>
        //    <button class="getQueue">queue</button>
        //    <button class="modal">modal</button>
        //
        //
        // файл  js/library/event-library-btn.js
        // - в нем мое предложение по организации работы страницы LIBRARY
        //
        //
        // страница HOME(активная по умолчанию)
        // - для записи фильма в storage
        //      1)  сделать импорт:
        //                      import storage from './js/storage/modal-home'
        //      2)  по событию открытия модального окна фильма (click по карточке) запустить функцию :
        //                      storage.modalHome(filmModal)
        //              где  filmModal   - {...} - объект с данными для выбранного фильма
        //
        //
        // страница LIBRARY
        // - при открытии страницы должны появиться НЕ АКТИВНЫЕ (белого цвета) кнопки  QUEUE и WATCHED
        //      1) для того, чтобы получить из storage (распарсеный массив объектов  [{}, {} ...]  )
        //              для QUEUE и WATCHED
        //                  -  сделать импорт:
        //                          import storageGetQueue from './get-queue';
        //                          import storageAddWatched from './add-watched';
        //                  - по событию click по QUEUE запустить функцию :
        //                          const storageQueue = storageGetQueue.getQueue();
        //                  - по событию click по WATCHED запустить функцию :
        //                          const storageWatched = storageGetWatched.getWatched()
        //      2) для записи фильма в storage
        //             a) для QUEUE
        //                  -  сделать импорт:
        //                          import btnQueue from './js/storage/modal-library-queue';
        //                  - по событию открытия модального окна фильма (click по карточке) запустить функцию :
        //                          btnQueue.modalLibraryQueue(filmModal));
        //             a) для WATCHED
        //                  -  сделать импорт:
        //                          import btnQueue from './js/storage/modal-library-watched';
        //                  - по событию открытия модального окна фильма (click по карточке) запустить функцию :
        //                          btnQueue.modalLibraryWatched(filmModal));
        //
        //        где  filmModal   - {...} - объект с данными для выбранного фильма

console.log('test');
