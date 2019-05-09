const PORT = 3000;
const express = require("express");
const app = express();
const authRoute = require("./routes/auth-route");
const profileRoute = require("./routes/profile-route");
const passportSetup = require("./config/passport-setup");
const mongo = require("./model/mongoConfig");
const cookieSession = require("cookie-session");
const passport = require("passport");

/**
    1. cookieParser
    2. session
    3. passport.initialize
    4. passport.session
    5. app.router
*/
// set up cookie session
app.use(
    cookieSession({
        maxAge: 24 * 60 * 60 * 1000,
        keys: ["nguyenhaidang"]
    })
);
// initalize passport
app.use(passport.initialize());
app.use(passport.session());
// set up route
app.use("/auth", authRoute);
app.use("/profile", profileRoute);
// set up view engine
app.set("view engine", "ejs");

// create home route
app.get("/", (req, res) => {
    res.render("home", {
        user: req.user
    });
});
// listen port
app.listen(PORT, (req, res) => {
    console.log("app start on port 3000");
});
