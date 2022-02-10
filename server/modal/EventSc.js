const mongoose = require('mongoose');
const eventSc = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    TrendCount:{
        type: Number,
        default:0
    }, 
    EventIm:{
            type:String
    },
    Target:{
        type:String
    }
}
)
const Event = new mongoose.model("Event",eventSc)
module.exports=Event