"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const user_controller_1 = require("./user.controller");
const user_validation_1 = require("./user.validation");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
router.post('/create', (0, validateRequest_1.default)(user_validation_1.UserValidation.createUserZodSchema), user_controller_1.UserController.createUser);
router.post('/:id', user_controller_1.UserController.deleteUser);
exports.UserRoutes = router;
