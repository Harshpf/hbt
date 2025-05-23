const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/habit", {});
        console.log("mongodb connected");
    } catch (err) {
        console.error("mongodb connection error:", err);
    }
};

module.exports = {
    connectDB
};
