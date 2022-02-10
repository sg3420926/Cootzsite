const mongoose = require('mongoose');
const newsSc = new mongoose.Schema({
    Topic: {
        type: String,
        required: true,
        max: 20
    },
    
    Para1: {
        type: String
    },
    Para2:{
        type: String,
    },
    Priority:{ 
        type:Number
    },
    NewsIm: {
        type: String
    }
}
)
const news = new mongoose.model("News",newsSc)
module.exports=news