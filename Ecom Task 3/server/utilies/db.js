const mongoose = require("mongoose");
// const URL = "mongodb://127.0.0.1:27017/mern_admin"
// mongoose.connect(URL);

const URL = process.env.MONGODB_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(URL);
        console.log("Connection Successfully Created with Database")
    } catch (error) {
        console.error("Database connection is Failed db.js");
        process.exit(0);
    }
}

module.exports = connectDB;