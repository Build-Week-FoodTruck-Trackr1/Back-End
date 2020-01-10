module.exports = (role) => {
    return function (req, res, next) {
        if (req.decodedJwt.roles && req.decodedJwt.roles.includes('diner')) {
            next();
        } else if (req.decodedJwt.roles && req.decodedJwt.roles.includes('operator')) {
            next();
        } else {
            res.status(403).json({ you: "don't have permission" });
        }
    }
}