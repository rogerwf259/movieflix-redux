const requireLogin = require('../middleware/requireLogin');
const watchlist = require('../middleware/watchList');
const bodyParser = require('body-parser');

module.exports = (app) => {
    /*app.get('/hub', requireLogin, (req, res) => {
        res.send('Success you are on Dashboard')
    });*/
    app.post('/add_watchlist', requireLogin, watchlist, (req, res) => {
        req.user.watchlist.push(req.body.title);
        req.user.save().then((user) => res.send(user));
    });

    app.post('/remove_from_watchlist', requireLogin, (req, res) => {
        const index = req.user.watchlist.indexOf(req.body.title);
        if (index !== -1) {
            req.user.watchlist.splice(index, 1);
            req.user.save().then((user) => res.send(user));
        } else {
        res.send('Success');}
    });
};