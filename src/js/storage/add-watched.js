function addWatched(data) {
    
    try {
        localStorage.setItem('films watched', JSON.stringify(data))
    } catch (error) {
        console.log('storage error', error.name)
        console.log(error.message)
    }
}

export default { addWatched };