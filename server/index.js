const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv').config();
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const movieRoute = require('./routes/movies')
const listRoute = require('./routes/lists')


mongoose.connect(
    process.env.MONGO_URL, { useNewUrlParser : true , useUnifiedTopology : true }
    ).then(()=>console.log("mongoDB connected")).catch(err=>console.log(err))

app.use(express.json())

app.use('/api/auth', authRoute)

app.use('/api/users', userRoute)

app.use('/api/movies', movieRoute)

app.use('/api/lists', listRoute)

const PORT = 4000

app.listen(PORT, ()=>{
    console.log('back end is working fine')
})