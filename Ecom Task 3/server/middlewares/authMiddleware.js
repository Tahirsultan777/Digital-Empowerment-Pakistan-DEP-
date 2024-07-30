const jwt = require("jsonwebtoken");
const User = require("../models/user_models");

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "Unauthorized HTTP, Token not provided" });
    }


    // Assuming token is in the format "Bearer <jwtToken<, Removing the "Bearer" prefic"
    const jwtToken = token.replace("Bearer", "").trim();
    console.log("Token from auth middleware", jwtToken);

    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SERECT_KEY);
        // console.log('okjbvhnbg', isVerified);
        const userData = await User.findOne({ email: isVerified.email }).
            select({
                password: 0,
            });
        console.log('qwerty', userData);

        req.user = userData;
        req.token = token;
        req.userID = userData._id;
        
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized Invalid Token" });
    }


    // Assuming token is in the format "Bearer <jwtToken<, Removing the "Bearer" prefic"
    // const jwtToken = token.replace("Bearer", "").trim();
    // console.log("Token From auth middleware", jwtToken);

    // try {
    //     const isVerified = jwt.verify(jwtToken, process.env.JWT_SERECT_KEY);
    //     const userData = await User.findOne({email: isVerified.email}).
    //     select({
    //         password: 0,
    //     });
    //     console.log("Ada",userData);

    //     req.user = userData;
    //     req.token = token;
    //     req.userID = user._id;
    //     next();
    // } catch (error) {
    //     return res.status(401).json({ message: 'Unauthrized. Invalid token.' });
    // }
}

module.exports = authMiddleware;