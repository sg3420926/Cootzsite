const mongoose = require('mongoose');
const thumbSc = new mongoose.Schema({
    Topic: {
        type: String,
        required: true,
    },
    
    Descri: {
        type: String
    },
    ThumbIm: {
        type: String
    },
    Date:{
        type:String
    }
}
)
const thumb = new mongoose.model("thumb",thumbSc)
module.exports=thumb