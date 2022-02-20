const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv').config();
const authRroute = require('./routes/auth')
const userRoute = require('./routes/users')

mongoose.connect(
    process.env.MONGO_URL, { useNewUrlParser : true , useUnifiedTopology : true }
    ).then(()=>console.log("mongoDB connected")).catch(err=>console.log(err))

app.use(express.json())

app.use('/api/auth', authRroute)

app.use('/api/users', userRoute)

const PORT = 40000

app.listen(PORT, ()=>{
    console.log('back end is working fine')
})