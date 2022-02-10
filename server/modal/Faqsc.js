const mongoose = require('mongoose');
const FaqSc = new mongoose.Schema({
    Qustion: {
        type: String,
        required: true,
    },
    Answer:{
        type: String,
    }
}
)
const faq = new mongoose.model("Faq",FaqSc)
module.exports=faq