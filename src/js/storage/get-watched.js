function getWatched() {
    
    try {
        let jsonWatched = localStorage.getItem('films watched');
        let dataWatched = JSON.parse(jsonWatched);
        return dataWatched
    } catch (error) {
        console.log('storage error', error.name)
        console.log(error.message)
    }
};

export default { getWatched };
