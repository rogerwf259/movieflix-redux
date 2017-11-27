const passport = require('passport');

module.exports = (app) => {
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/hub',
            failureRedirect: '/home'
        })
    );
    app.post('/login', passport.authenticate('local-login', {
            successRedirect: '/hub',
            failureRedirect: '/home'
        }
    ));
    app.get('/logout', (req, res) => {
        req.session.destroy();
        res.redirect('/home');
        console.log(req.user);
    });
    app.get('/current_user', (req, res) => {
        res.send(req.user);
        console.log(req.user);
    });
};