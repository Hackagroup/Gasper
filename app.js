
// Author : Amanuel, Vitoria

// express 
const express = require('express')
app = express()

//Mongodb
const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://Vitoria_Santos:<password>@cluster0.uft35.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

//azure 
// const azure = require('azure-storage');
// const db = azure.createTableService("sqlvabklb6rv3b2pbm", "0Htv8fG4/eqehFwaLfiqW2rlzhHW279W8rH7jeeV85ny8s7IREaMowcvWMFpemCPbm8vgl76iij6KgcAgejMtQ==")

// .env file configuration
require('dotenv').config()

 
// This is the main router
// where it gathers all functions from
// controllers and exports them like /api
// below

const main_ctrl = require('./controllers/main')
app.use('/api/', main_ctrl.hello)
  
const singlePost_ctrl = require('./controllers/singlePost')
app.use('/post/', singlePost_ctrl.post)

const edit_ctrl = require('./controllers/edit')
app.use('/edit/', edit_ctrl.edit)

const delete_ctrl = require('./controllers/delete')
app.use('/delete/', delete_ctrl.delete)

const search_ctrl = require('./controllers/search')
app.use('/search/', search_ctrl.search)

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//React Runs on Port 3000  
const PORT = process.env.PORT || 3002

app.listen(PORT, ()=>{
    console.log("Listening on Port " + PORT)
})