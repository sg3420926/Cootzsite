const mongoose = require('mongoose');
const blogSc = new mongoose.Schema({
    Topic: {
        type: String,
        required: true,
    },
    Tagline:{
        type: String
    },
    Para1: {
        type: String
    },
    Para2:{
        type: String,
    },
    BlogIm: {
        type: String
    },
    ImageInfo:{
        type:String
    }
}
)
const blog = new mongoose.model("blog",blogSc)
module.exports=blog