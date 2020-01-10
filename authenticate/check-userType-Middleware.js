module.exports = (role) => {
    return function (req, res, next) {
        console.log(req.decodedJwt.role)
        if (req.decodedJwt.role && req.decodedJwt.role.includes(role)) {
            next();
        } else if (req.decodedJwt.role && req.decodedJwt.role.includes('operator')) {
            next();
        } else {
            res.status(403).json({ you: "don't have permission" });
        }
    }
}