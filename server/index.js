const express = require('express')
const app = express()
const cors = require('cors');
const mongoose = require('mongoose')
const dotenv = require('dotenv').config();
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const admin_authRoute = require('./routes/adminAuth')
const adminsRoute = require('./routes/admins')
const movieRoute = require('./routes/movies')
const listRoute = require('./routes/lists')


mongoose.connect(
    process.env.MONGO_URL, { useNewUrlParser : true , useUnifiedTopology : true }
    ).then(()=>console.log("mongoDB connected")).catch(err=>console.log(err))

app.use(express.json())

app.use(cors());

app.use('/api/auth', authRoute)

app.use('/api/admin_auth', admin_authRoute)

app.use('/api/admins', adminsRoute)

app.use('/api/users', userRoute)

app.use('/api/movies', movieRoute)

app.use('/api/lists', listRoute)

const PORT = 4400

app.listen(PORT, ()=>{
    console.log('back end is running at '+ PORT)
})