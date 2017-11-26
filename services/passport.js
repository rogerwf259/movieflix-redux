const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bCrypt = require('bcrypt-nodejs');


const User = mongoose.model('users');
    
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, async (req, email, password, done) => {
        const generateHash = (password) => bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        
        const existingUser = await User.findOne({ email: email })
            if (existingUser) {
                return done(null, false, {message: 'An account with that email already exists.'});
            }
            var userPassword = generateHash(password);

            const user = await new User({ 
                email: email,
                password: userPassword,
                name: req.body.name
            }).save()
            done(null, user);
    })
);

passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, async (req, email, password, done) => {
        const isValidPassword = (userpass, password) => {
            return bCrypt.compareSync(password, userpass);
        }
        const existingUser = await User.findOne({ email: email })
            if (!existingUser) {
                console.log('Account not found.');
                return done(null, false, {message: 'Account not found.'});
            }
            if (!isValidPassword(existingUser.password, password)) {
                console.log('Incorrect password');
                return done(null, false, {message: 'Incorrect password'});
            }
            return done(null, existingUser);
    })
);