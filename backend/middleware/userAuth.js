const jwt = require("jsonwebtoken")


const isUser = function (req, res, next) {
    let token = req.headers["x-api-key"]
    if (token) {
        const validToken = jwt.verify(token, process.env.JWT_SECRET)
        if (validToken) {
            
            console.log("you can go to main function now")
            req.validToken=validToken
            next();
        }else {
            res.send({ msg: "invalid Token" })
        }
    } else {
        res.send({ msg: "mandatory header is not present" })
    }
}



module.exports={isUser}