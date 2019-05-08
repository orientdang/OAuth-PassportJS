const express = require("express");
const router = express.Router();

// auth login
router.get("/login", (req, res) => {
    res.render("login");
});

// auth with google
router.get("/google", (req, res) => {
    console.log("handler with google");
    res.send("login with google");
});

// logout
router.get("/logout", (req, res) => {
    res.send("login out");
});
module.exports = router;
