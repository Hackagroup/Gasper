
// Author : Amanuel, Vitoria

const mongoose = require("mongoose")

// express 
const express = require('express')
app = express()

// Firebase
const firebase = require('firebase');
const admin = require("firebase-admin");

const serviceAccount = require("./config/firebase.json");

// CORS
const cors = require('cors')

//Mongodb
const mongoDB = 'mongodb+srv://Gasper:Gasper1@cluster0.w0zgo.mongodb.net/GasperretryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://GasperHackathon:GasperAgain@cluster0.i72yt.mongodb.net/Gasper?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// .env file configuration
require('dotenv').config()


app.use(cors()) // Use this to avoid Cross Origin Errors
app.use(express.json()); //Used to parse JSON bodies


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://gasper-c3912.firebaseio.com"
});

// Get a database reference to our blog
let fb_db = admin.database();
let ref = fb_db.ref("data");

let postsRef = ref.child("posts");


// let app = firebase.initializeApp({
//     apiKey: '<your-api-key>',
//     authDomain: '<your-auth-domain>',
//     databaseURL: '<your-database-url>',
//     projectId: '<your-cloud-firestore-project>',
//     storageBucket: '<your-storage-bucket>',
//     messagingSenderId: '<your-sender-id>'
// });

 
// This is the main router
// where it gathers all functions from
// controllers and exports them like /api
// below

const main_ctrl = require('./controllers/main')
app.use('/api/', main_ctrl.hello)

const search_ctrl = require('./controllers/search')
app.use('/search/', search_ctrl.search)
  
const singlePost_ctrl = require('./controllers/singlePost')
app.use('/post/', singlePost_ctrl.post)

const edit_ctrl = require('./controllers/edit')
app.use('/edit/', edit_ctrl.edit)

const delete_ctrl = require('./controllers/delete')
app.use('/delete/', delete_ctrl.delete)

app.post('/add', (req,res) => {
    postsRef.set(req.body)
})

app.get('/get', (req,res) => {
    postsRef.on("value", function (snapshot) { 
        res.json(snapshot.val());
    }, function (errorObject) {
        res.send("The read failed: " + errorObject.code);
    });
})

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//React Runs on Port 3000  
//NodeJS runs on Port 8000
const PORT = process.env.PORT || 8000

app.listen(PORT, ()=>{
    console.log("Listening on Port " + PORT)
})