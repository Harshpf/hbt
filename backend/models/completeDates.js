const mongoose = require("mongoose");

const dateschema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
    },
    cardId:{
        type:mongoose.Schema.Types.ObjectId,
    },
    compeleted:[{
        type:String,
    }],
    day:[{
        type:String
    }]
});

const streak = mongoose.model("dates",dateschema);
module.exports = streak;