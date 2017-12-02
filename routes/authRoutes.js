const passport = require('passport');

module.exports = (app) => {
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/dashboard/popular',
            failureRedirect: '/home'
        })
    );
    app.post('/login', passport.authenticate('local-login', {
            successRedirect: '/dashboard/popular',
            failureRedirect: '/home'
        }
    ));
    app.get('/logout', (req, res) => {
        req.session.destroy();
        res.redirect('/');
        console.log(req.user);
    });
    app.get('/current_user', (req, res) => {
        const user = req.user;
        res.send(user);
    });
};