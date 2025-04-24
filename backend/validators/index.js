import {body} from "express-validator";
import { AvailableTaskStatuses, AvailableUserRoles } from "../utils/constants.js";


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
    ];
}


export const userChangeCurrentPasswordValidator = () => {
    return [
        body("oldPassword").notEmpty().withMessage("Old password is required"),
        body("newPassword").notEmpty().withMessage("New password is required")
    ];
}


export const userForgotPasswordValidator = () => {
    return [
        body("email").notEmpty().withMessage("Email is required").isEmail().withMessage("Email is invalid")
    ];
}


const userResetForgottenPasswordValidator = () => {
    return [
        body("newPassword").notEmpty().withMessage("Password is required")
    ];
}


export const createProjectValidator = () => {
    return [
        body("name").notEmpty().withMessage("Name is required"),
        body("description").optional()
    ];
}


export const addMemberToProjectValidator = () => {
    return [
        body("email").trim().notEmpty().withMessage("Email is required").isEmail().withMessage("Email is invalid"),
        body("role").notEmpty().withMessage("Role is required").isIn(AvailableUserRoles).withMessage("Role is invalid")
    ];
}


export const createTaskValidator = () => {
    return [
        body("title").notEmpty().withMessage("Title is required"),
        body("description").optional(),
        body("assignedTo").notEmpty().withMessage("Assigned to is required"),
        body("status").optional().notEmpty().withMessage("Status is required").isIn(AvailableTaskStatuses)
    ];
}

  
export const updateTaskValidator = () => {
    return [
        body("title").optional(),
        body("description").optional(),
        body("status").optional().isIn(AvailableTaskStatuses).withMessage("Status is invalid"),
        body("assignedTo").optional()
    ];
};
  


export const notesValidator = () => {
    return [
        body("content").notEmpty().withMessage("Content is required")
    ];
}