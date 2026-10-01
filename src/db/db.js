const mongoose = require("mongoose")


async function connectDB(){
    await mongoose.connect("mongodb+srv://yt:toyXM5X9hPFRM1vl@backend-development.roje2ce.mongodb.net/halley")
    console.log("Connected to DB")
}

module.exports = connectDB