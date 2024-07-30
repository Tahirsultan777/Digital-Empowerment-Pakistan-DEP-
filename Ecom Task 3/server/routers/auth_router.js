const express = require('express');
const router = express.Router();
const authControllers = require("../controllers/auth_controllers");
const { signupSchema, loginSchema } = require("../validator/auth_validator");
const validate = require("../middlewares/validate_middleWare")
const authMiddleware = require('../middlewares/authMiddleware'); // Ensure this path is correct
console.log("authMiddleware loaded successfully");

router.route("/").get(authControllers.home);

router.route("/register").post(validate(signupSchema), authControllers.register);

router.route("/login").post(validate(loginSchema), authControllers.login);

router.route("/user").get(authMiddleware, authControllers.user);

module.exports = router;