module.exports = (req, res, next) => {
    const find = req.user.watchlist.indexOf(req.body.title);
    if (find !== -1) {
        return 1;
    }
    next();
};