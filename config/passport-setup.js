const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const User = require("../model/userModel");
const clientID =
    "1069305249790-0mocsgams21alohr7kncufv3p0utmpbm.apps.googleusercontent.com";
const clientSecret = "EQPZSoX95rI3hNBBgBhTRNmb";
const callbackURL = "/auth/google/redirect";

passport.use(
    new GoogleStrategy(
        {
            // options for Google strategy
            clientID,
            clientSecret,
            callbackURL
        },
        (accessToken, refreshToken, profile, done) => {
            const userName = profile.displayName;
            const googleID = profile.id;
            const picture = profile._json.picture;
            console.log(profile);
            // passport callback function
            // check if user already exits in db
            User.findOne({
                googleID
            }).then(currentUser => {
                if (currentUser) {
                    // already have a user
                    console.log(`current user ${currentUser}`);
                    done(null, currentUser);
                } else {
                    // create new user if not exits
                    const user = new User({
                        userName,
                        googleID,
                        picture
                    });
                    user.save().then(newUser => {
                        console.log(`new user ${newUser}`);
                        done(null, newUser);
                    });
                }
            });
        }
    )
);
// set cookie
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});
