import express from 'express';
const router = express.Router();
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';
import validateRequest from '../../middlewares/validateRequest';

router.post(
  '/create',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUser,
);

router.post(
  '/:id',
  UserController.deleteUser,
);

export const UserRoutes = router;
