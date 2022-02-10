const express = require('express');
const path = require('path')
const cors = require('cors');
const app=express()
require("dotenv").config({
    path: path.join("config.env")  
})
var bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
const mongoose = require('mongoose')
const db=process.env.DB
mongoose.connect(db,{
    useNewUrlParser: true, 
    useUnifiedTopology: true }).then(() => {
    console.log("db is ready")
}).catch(err => {console.log("fail")})


app.use(cors());
app.use(require('./route/auth'))
app.listen(8000,()=>{
    console.log("listning to 8000 port")
})