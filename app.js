
// Author : Amanuel, Vitoria

// express 
const express = require('express')
app = express()

// Firebase
const firebase = require('firebase');
const admin = require("firebase-admin");

const serviceAccount = require("./config/firebase.json");

// CORS
const cors = require('cors')


// Port Configuration
require('dotenv').config()


app.use(cors()) // Use this to avoid Cross Origin Errors
app.use(express.json()); //Used to parse JSON bodies


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://gasper-c3912.firebaseio.com"
});

// Get a database reference to our appointments
let fb_db = admin.database();
let ref = fb_db.ref("data");
let postsRef = ref.child("posts");

// Listens for an add request and 
// adds appointment
app.post('/add', (req,res) => {
    postsRef.set(req.body)
})

// Listenes for an update request
// and updates appointment
app.put('/update', (req,res) => {
    postsRef.set(req.body)
})

// Listenes for a delete request
// and deletes appointment
app.delete('/del', (req,res) => {
    let id = (parseInt(req.body["name"]))
    postsRef.child(id).remove()
})

// Listens for a get request
// And sends all appointments 
// in JSON-Promise format
app.get('/get', (req,res) => {
    postsRef.once("value", function (snapshot) { 
        res.json(snapshot.val());
    }, function (errorObject) {
        res.send("The read failed: " + errorObject.code);
    });
})



// IMPORTANT
// React Runs on Port 3000  
// NodeJS runs on Port 3001 || 8000(if fail)
const PORT = process.env.PORT || 8000

app.listen(PORT, ()=>{
    console.log("Listening on Port " + PORT)
})