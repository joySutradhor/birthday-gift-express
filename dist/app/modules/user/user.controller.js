"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("./user.service"); // Replace with your actual service path
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const createUser = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    // Extract user data from the request body
    const { ...userData } = req.body;
    // Call the service to create the user
    const result = await user_service_1.UserService.createUser(userData);
    // Send a successful response
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.CREATED,
        success: true,
        message: `${result?.email} created successfully!`,
        data: result,
    });
});
exports.UserController = {
    createUser,
};
