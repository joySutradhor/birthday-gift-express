import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { GalleryItemValidation } from './gallery.validation';
import { SliderController } from './gallery.controller';
const router = express.Router();

router.post(
  '/create',
  validateRequest(GalleryItemValidation.createGalleryItemZodSchema),
  SliderController.createGalleryItem,
);

router.get('/', SliderController.getGalleryItems);

// update slider
router.patch(
  '/:id',
  validateRequest(GalleryItemValidation.updateGalleryItemZodSchema),
  SliderController.updateGalleryItem,
);

// delete slider
router.delete('/:id', SliderController.removeGalleryItem);

export const GalleryRoutes = router;
