const jwt = require("jsonwebtoken")
const secret = require("../config/secret")

module.exports = (req, res, next) => {
    const token = req.headers.authorization
    if (token) {
        jwt.verify(token, secret.jwtSecret, (error, decodedToken) => {
            if (error) {
                console.log(error)
                res.status(401).json({ message: "Not authorized", error})
            } else {
                req.decodedJwt = decodedToken
                next()
            }
        })
    } else {
        res.status(401).json({ message: "Not logged in, please login" })
    }
};