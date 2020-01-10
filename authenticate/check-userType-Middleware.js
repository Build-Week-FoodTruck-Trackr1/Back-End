module.exports = (role) => {
    return function (req, res, next) {
        console.log(req.decodedJwt.type)
        if (req.decodedJwt.type && req.decodedJwt.type.includes(role)) {
            next();
        } else if (req.decodedJwt.type && req.decodedJwt.type.includes('operator')) {
            next();
        } else {
            res.status(403).json({ you: "don't have permission" });
        }
    }
}