const router = require("express").Router();

const authCheck = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.redirect("/");
        next();
    }
};

// router.get("/", authCheck, (req, res) => {
//     res.send(`Welcome ${req.user.userName}`);
// });

router.get("/", authCheck, (req, res) => {
    res.render("profile", {
        user: req.user
    });
    // res.redirect("/");
});

module.exports = router;
