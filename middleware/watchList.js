module.exports = (req, res, next) => {
    const find = req.user.watchlist.indexOf(req.body.title);
    if (find !== -1) {
        return res.send('existing movie');
    }
    next();
};