"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const user_model_1 = require("./user.model"); // Replace with your actual model path
const createUser = async (userData) => {
    const httpStatus = await import('http-status-ts');
    try {
        // Create the user in the database
        const user = await user_model_1.User.create(userData);
        // Return the created user document
        return user;
    }
    catch (error) {
        // Handle specific errors, e.g., validation, duplicates
        throw new ApiError_1.default(httpStatus.HttpStatus.BAD_REQUEST, `Error creating user: ${error}`);
    }
};
const deleteUser = async (userId) => {
    const httpStatus = await import('http-status-ts');
    try {
        // Find the user by ID and delete
        const deletedUser = await user_model_1.User.findByIdAndDelete(userId);
        // If the user doesn't exist, throw a not found error
        if (!deletedUser) {
            throw new ApiError_1.default(httpStatus.HttpStatus.NOT_FOUND, 'User not found or already deleted.');
        }
        // Return the deleted user document
        return deletedUser;
    }
    catch (error) {
        // Handle other errors
        throw new ApiError_1.default(httpStatus.HttpStatus.INTERNAL_SERVER_ERROR, `Error deleting user: ${error}`);
    }
};
exports.UserService = {
    createUser,
    deleteUser,
};
