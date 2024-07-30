const { z } = require("zod");

const loginSchema = z.object({
    email: z
        .string({ required_error: "email is Required" })
        .trim()
        .email({ message: "invalid email address" })
        .min(3, { message: "Email must be  at leat of 3 Characters" })
        .max(255, { message: "Email must not be more than 255 Characters" }),
    password: z
        .string({ required_error: "Password is Required" })
        .min(7, { message: "Password must be  at leat of 7 Characters" })
        .max(1024, "Password must not be more than 1024 Characters"),
})

// Creating an Object Schema
const signupSchema = z.object({
    username: z
        .string({ required_error: "Name is Required" })
        .trim()
        .min(3, { message: "Name must be  at leat of 3 Characters" })
        .max(255, { message: "Name must not be more than 255 Characters" }),
    email: z
        .string({ required_error: "email is Required" })
        .trim()
        .email({ message: "invalid email address" })
        .min(3, { message: "Email must be  at leat of 3 Characters" })
        .max(255, { message: "Email must not be more than 255 Characters" }),
    phone: z
        .string({ required_error: "phone is Required" })
        .trim()
        .min(10, { message: "phone must be  at leat of 10 Characters" })
        .max(20, { message: "phone must not be more than 20 Characters" }),
    password: z
        .string({ required_error: "Password is Required" })
        .min(7, { message: "Password must be  at leat of 7 Characters" })
        .max(1024, "Password must not be more than 1024 Characters"),
});

module.exports = { signupSchema, loginSchema };