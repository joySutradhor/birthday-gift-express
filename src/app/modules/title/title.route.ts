import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { TitleValidation } from './title.validation';
import { SliderItemController } from './title.controller';
const router = express.Router();

router.post(
  '/create',
  validateRequest(TitleValidation.createTitleZodSchema),
  SliderItemController.createStoreyItem,
);

router.get('/', SliderItemController.getStoreyItems);

router.get('/:id', SliderItemController.getSingleStoreyItem);

// update story route
router.patch(
  '/:id',
  validateRequest(TitleValidation.updateTitleZodSchema),
  SliderItemController.updateStoreyItem,
);

// delete story route
router.delete('/:id', SliderItemController.removeStoreyItem);

export const TitleRoutes = router;
