const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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
// pre save()
userSchema.pre("save", async next => {
    const user = this;
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});
// valid user'password
userSchema.method.isPasswordValid = async function(next) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
    return compare;
};

module.exports = mongoose.model("User", userSchema);
