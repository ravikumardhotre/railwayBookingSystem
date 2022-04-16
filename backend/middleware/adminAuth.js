const jwt = require("jsonwebtoken")


const isAdmin = function (req, res, next) {
    let token = req.headers["x-api-key"]
    if (token) {
        const validToken = jwt.verify(token, process.env.SECRET_KEY)
        if (validToken) {
            req.validToken=validToken
            next();
        }else {
            res.send({ msg: "invalid Token" })
        }
    } else {
        res.send({ msg: "mandatory header is not present" })
    }
}


module.exports={isAdmin}