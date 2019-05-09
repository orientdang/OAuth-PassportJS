const mongoose = require("mongoose");
const user = "dangnguyen";
const password = "aA123456789";
const URI = `mongodb+srv://${user}:${password}@oauth-passportjs-if8du.mongodb.net/test?retryWrites=true`;

mongoose.connect(URI, err => {
    if (err) {
        console.log(err);
    }
});
