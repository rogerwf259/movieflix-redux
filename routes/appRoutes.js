const requireLogin = require('../middleware/requireLogin');

module.exports = (app) => {
    app.get('/dashboard', requireLogin, (req, res) => {
        res.send('Dashboard page, Success');
    });
};