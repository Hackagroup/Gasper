// This script gets posts from firebase database
import { useQuery } from 'react-query-hooks';
const axios = require('axios')


console.log("IM IN FIREBASE-POSTS.jS")

const firebase_data = axios.get('/get')
    .then(function (response) {
        return response.data;
    })


export {firebase_data}