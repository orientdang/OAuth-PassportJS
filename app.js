const express = require("express");
const PORT = 3000;
const app = express();
const authRoute = require("./routes/auth-route");

// set up route
app.use("/auth", authRoute);

// set up view engine
app.set("view engine", "ejs");

// create home route
app.get("/", (req, res) => {
    res.render("home");
});

// listen port
app.listen(PORT, (req, res) => {
    console.log("app start on port 3000");
});
