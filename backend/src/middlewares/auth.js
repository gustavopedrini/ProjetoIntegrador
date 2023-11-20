const jwt = require("jsonwebtoken");
const config = require("../config.js");


function authMiddleware(permission) {
    return (req, res, next) => {
        const token = req.headers["authorization"];

        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: "Unauthorized" });
            }

            if (permission && !permission.includes(decoded.role)) {
                return res.status(401).json({ message: "Unauthorized" })
            }

            console.log(decoded)
            req.session = decoded

            next();
        });
    }
};

module.exports = authMiddleware;