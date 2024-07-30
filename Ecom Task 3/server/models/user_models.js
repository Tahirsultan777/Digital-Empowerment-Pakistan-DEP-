const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
})

// Secure the paassword with the bcrypt
// Yeh **method** user k data ko database mein save karny sy phly yeh **method** Run ho ga 
UserSchema.pre("save", async function (next) {
    console.log("Pre Method", this);

    const user = this;
    // agr password create he nhi hova hai first means bcrypt nhi hova 
    if (!user.isModified("password")) {
        // move to auth_controllers file and save data in database
        next();
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_Password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_Password;
    } catch (error) {
        next(error);
    }

})


// Compare To password
UserSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}



// What is JWT?
// JSON Web Token ( JWT ) is an open standard Thats defined a compact and Self -contained way for securely transmatiting information between parties as a JSON Object 
// --> JWT are often used for authentication and authorization in web appplication
// 1. **Authentication** Verifying the Identity of a user or client 
// 2. **Authorization** Determining what action a user or client  is allowed to perform 
// Secure User a Authentication With JSON Web Token JWT 
UserSchema.methods.generateToken = async function () {
    try {
        return jwt.sign(
            {
                userId: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin,
            },
            process.env.JWT_SERECT_KEY,
            {
                expiresIn: "60d",
            }
        );
    } catch (error) {
        console.error(error);
    }
}
 

// Define the model or the collection name 
const User = new mongoose.model("User", UserSchema);
module.exports = User;