
// Author : Amanuel, Vitoria

const mongoose = require("mongoose")

// express 
const express = require('express')
app = express()

//Mongodb
const mongoDB = "mongodb+srv://GasperHackathon:GasperAgain@cluster0.i72yt.mongodb.net/Gasper?retryWrites=true&w=majority";
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

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//React Runs on Port 3000  
const PORT = process.env.PORT || 8000

app.listen(PORT, ()=>{
    console.log("Listening on Port " + PORT)
})