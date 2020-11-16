
// Author : Amanuel, Vitoria

// express 
const express = require('express')
app = express()

// .env file configuration
require('dotenv').config()

 
// This is the main router
// where it gathers all functions from
// controllers and exports them like /api
// below

const main_ctrl = require('./controllers/main')
app.use('/api/', main_ctrl.hello)
  

const login_ctrl = require('./controllers/login')
app.use('/login/',login_ctrl.main)
  
const singlePost_ctrl = require('./controllers/singlePost')
app.use('/post/', singlePost_ctrl.post)

const edit_ctrl = require('./controllers/edit')
app.use('/edit/', edit_ctrl.edit)

const delete_ctrl = require('./controllers/delete')
app.use('/delete/', delete_ctrl.delete)

const search_ctrl = require('./controllers/search')
app.use('/search/', search_ctrl.search)

//React Runs on Port 3000  
const PORT = process.env.PORT || 3002 

app.listen(PORT, ()=>{
    console.log("Listening on Port " + PORT)
})