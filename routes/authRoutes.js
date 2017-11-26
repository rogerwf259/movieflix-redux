const passport = require('passport');

module.exports = (app) => {
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/dashboard',
            failureRedirect: '/Landing'
        })
    );
    app.post('/login', passport.authenticate('local-login', {
            successRedirect: '/dashboard',
            failureRedirect: '/Landing'
        }
    ));
    app.get('/logout', (req, res) => {
        req.session.destroy();
        res.redirect('/Landing');
        console.log(req.user);
    });
    app.get('/current_user', (req, res) => {
        res.send(req.user);
        console.log(req.user);
    });
};