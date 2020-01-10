module.exports = (role) => {
    return function (req, res, next) {
        console.log(req)
        if (req.decodedToken.role && req.decodedToken.role.includes(role)) {
            next();
        } else {
            res.status(403).json({ you: "don't have permission" });
        }
    }
}