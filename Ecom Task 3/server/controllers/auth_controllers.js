const User = require("../models/user_models.js");
const bcrypt = require("bcryptjs");


// *____________________*
//         HOME
// *____________________*

const home = async (req, res) => {
    try {
        res.status(200).send("Welcome to my Router Home Page")
    } catch (error) {
        console.log(error)
    }
}

// *____________________*
//        Register
// *____________________*

const register = async (req, res, next) => {
    try {
        console.log(req.body);
        const { username, email, phone, password } = req.body;

        const emailExist = await User.findOne({ email });

        if (emailExist) {
            return res.status(400).json({ message: "email already exist" })
        }

        // Hash the password
        // const saltRound = 10;
        // const hash_Password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({
            username,
            email,
            phone,
            password,
            //  password:hash_Password 
        })


        res.status(201).json({
            message: "Registration successful",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });
        console.log(token);
    } catch (error) {
        // res.status(500).json("Internal Server Error");
        next(error)
    }
}


// *____________________*
//    User Login Logic
// *____________________*

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });
        console.log(userExist)

        if (!userExist) {
            return res.status(400).json({ message: "invalid credentional" });
        }

        // const user = await bcrypt.compare(password, userExist.password);
        const user = await userExist.comparePassword(password);

        if (user) {
            res.status(201).json({
                message: "Login successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
            // console.log(token);
        } else {
            res.status(401).json({ message: "Invalid password or email" });
        }

    } catch (error) {
        res.status(500).json("Internal Server Error in login");
    }
};


// *____________________*
//   To Send User data - User Logic
// *____________________*

const user = async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({ userData });
    } catch (error) {
        console.log(`error from the user route ${error}`);
    }
}

module.exports = { home, register, login, user };