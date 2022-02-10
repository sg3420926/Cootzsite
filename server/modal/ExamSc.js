const mongoose = require('mongoose');
const ExamSc = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    
    Detail1: {
        type: String
    },
    Detail2:{
        type: String,
    },
    ExamCode:{
        type: String
    },
    Examlogo: {
        type: String
    }
}
)
const exam = new mongoose.model("exam",ExamSc)
module.exports=exam