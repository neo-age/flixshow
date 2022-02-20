const router = require('express').Router()
const userModel = require('../models/User')
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken")

//REGESTER
router.post("/regester", async (req, res)=>{
    const newUser = new userModel({
        username:req.body.username,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    })
    try{
        const user = await newUser.save()
        res.status(201).json(user)
    }catch(err){
        res.status(500).json(err)
    }
})
//LOGIN
router.post("/login", async (req, res)=>{
    try{
        const user = await userModel.findOne({ user: req.body.email });
        !user && res.status(401).json("1" + req.body.email);

        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);


        originalPassword !== req.body.password &&
        res.status(401).json("2 " + originalPassword);

        const accessToken = jwt.sign(
            {id: user._id, isAdmin: user.isAdmin},
            process.env.SECRET_KEY,
            { expiresIn: "5d"}
        )
        
        const {password, ...info} = user._doc;

        res.status(200).json({...info, accessToken})
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router