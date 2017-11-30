module.exports = (req, res, next) => {
    if (!req.user) {
        return (
            res.send({message: 'Not logged in'}),
            res.redirect('/home')
        );
    }
    next();
};