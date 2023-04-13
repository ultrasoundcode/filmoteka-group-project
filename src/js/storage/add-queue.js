function addQueue(data) {
    
    try {
        localStorage.setItem('films queue', JSON.stringify(data))
    } catch (error) {
        console.log('storage error', error.name)
        console.log(error.message)
    }
};

export default { addQueue };
