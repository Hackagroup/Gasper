
const express = require('express')

require('dotenv').config()

app = express()
app.set('view engine','ejs')


app.use('/api/', require('./routes/main.js'))


const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log("Listening on Port " + PORT)
})