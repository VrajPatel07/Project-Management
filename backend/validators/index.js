import {body} from "express-validator";



export const userRegistrationValidator = () => {
    return [
        body("email").trim().notEmpty().withMessage("Email is required").isEmail().withMessage("Email is invalid"),
        body("username").trim().notEmpty().withMessage("Username is required").isLength({min : 3}).withMessage("Username should be atleast 3 characters"),
        body("password").trim().notEmpty().withMessage("Password is required").isLength({min : 8}).withMessage("Password should be of atleast 8 characters"),
        body("role").trim().notEmpty().withMessage("Role is required")
    ];
}


export const userLoginValidator = () => {
    return [
        body("email").trim().notEmpty().withMessage("Email is required").isEmail().withMessage("Email is invalid"),
        body("password").trim().notEmpty().withMessage("Password is required").isLength({min : 8}).withMessage("Password should be of atleast 8 characters")
    ]
}