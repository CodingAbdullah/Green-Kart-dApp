require("dotenv").config({ path : '../.env' });
const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
    
    const token = req.headers.authorization.split(" ")[1]; // Format is x-auth-token: Bearer <token>

    if (!token) {
        res.status(400).json({
            message: "No token found, authorization denied"
        });
    }
    else {
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err){
                res.status(400).json({
                    message: "Couldn't decode given token"
                });
            }
            else {
                req.user = decoded;
                next();
            }
        });
    }
}