const requireLogin = require('../middleware/requireLogin');

module.exports = (app) => {
    app.get('/hub', requireLogin, (req, res) => {
        res.send('Success you are on Dashboard')
    });
};