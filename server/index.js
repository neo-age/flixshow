const express = require("express");
const mongoose = require("mongoose")
const app = express();

const ud = require("./models/Users")

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/userData", { useNewUrlParser : true })

app.get('/', async (req, res)=>{
    const user = new ud({ username: "sam",userage: 25})

    try {
        await user.save()
    } catch(err){
        console.log(err)
    }
})

const PORT = 4001;
app.listen(PORT,()=>{
    console.log("server running in "+ PORT)
})
