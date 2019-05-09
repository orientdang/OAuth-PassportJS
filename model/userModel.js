const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    userName: {
        type: String
    },
    googleID: {
        type: String
    },
    picture: {
        type: String
    }
});

module.exports = mongoose.model("User", userSchema);
