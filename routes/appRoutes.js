const requireLogin = require('../middleware/requireLogin');

module.exports = (app) => {
    app.get('/hub', requireLogin, (req, res) => {
        res.redirect('/hub');
    });
};