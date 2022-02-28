const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    title:{type:String, required:true, unique:true},
    desc:{type:String},
    img:{type:String},
    imgtitle:{type:String},
    imgsm:{type:String},
    trailer:{type:String},
    video:{type:String},
    year:{type:String},
    agelimit:{type:Number},
    genre:{type:String},
    isSeries:{type:Boolean, default:false}
},
{
    timestamps:true
}
)

module.exports = mongoose.model("movies", MovieSchema)