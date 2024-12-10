"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const event_validation_1 = require("./event.validation");
const event_controller_1 = require("./event.controller");
const router = express_1.default.Router();
router.post('/create', (0, validateRequest_1.default)(event_validation_1.TitleValidation.createEventZodSchema), event_controller_1.SliderItemController.createStoreyItem);
router.get('/', event_controller_1.SliderItemController.getStoreyItems);
router.get('/:id', event_controller_1.SliderItemController.getSingleStoreyItem);
// update story route
router.patch('/:id', (0, validateRequest_1.default)(event_validation_1.TitleValidation.updateEventZodSchema), event_controller_1.SliderItemController.updateStoreyItem);
// delete story route
router.delete('/:id', event_controller_1.SliderItemController.removeStoreyItem);
exports.EventRoutes = router;
