const express = require("express");
const router = express.Router();
const passport = require("passport");

// auth login
router.get("/login", (req, res) => {
    res.render("login");
});

// auth with google
router.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile"]
    })
);

// call back route for google to redirect
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
    res.redirect("/profile/");
    // res.send(req.user);
    // res.send("you reach the callback uri");
});

// logout
router.get("/logout", (req, res) => {
    req.logOut();
    res.redirect("/");
});

module.exports = router;
