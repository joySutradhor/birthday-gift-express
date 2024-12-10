import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { TitleValidation } from './event.validation';
import { SliderItemController } from './event.controller';
const router = express.Router();

router.post(
  '/create',
  validateRequest(TitleValidation.createEventZodSchema),
  SliderItemController.createStoreyItem,
);

router.get('/', SliderItemController.getStoreyItems);

router.get('/:id', SliderItemController.getSingleStoreyItem);

// update story route
router.patch(
  '/:id',
  validateRequest(TitleValidation.updateEventZodSchema),
  SliderItemController.updateStoreyItem,
);

// delete story route
router.delete('/:id', SliderItemController.removeStoreyItem);

export const EventRoutes = router;
