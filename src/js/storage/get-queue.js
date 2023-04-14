function getQueue() {
    
    try {
        let jsonQueue = localStorage.getItem('films queue');
        let dataQueue = JSON.parse(jsonQueue)
        return dataQueue
    } catch (error) {
        console.log('storage error', error.name)
        console.log(error.message)
    }
};

export default { getQueue };