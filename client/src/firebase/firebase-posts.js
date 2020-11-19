// This script gets posts from firebase database
const axios = require('axios')

 

const firebase_data = axios.get('/get')
    .then(function (response) {
        return response.data;
    })

export {firebase_data}