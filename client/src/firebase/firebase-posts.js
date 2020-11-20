// Author : Amanuel

// This script gets posts from firebase database
const axios = require('axios')

 
// Makes a AXIOS call to /get 
// Where express listens and gives
// all records
const firebase_data = axios.get('/get')
    .then(function (response) {
        return response.data;
    })

export {firebase_data}