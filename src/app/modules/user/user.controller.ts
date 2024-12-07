import { Request, Response } from 'express';
import { UserService } from './user.service'; // Replace with your actual service path
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';


const createUser = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');

  // Extract user data from the request body
  const { ...userData } = req.body;

  // Call the service to create the user
  const result = await UserService.createUser(userData);

  // Send a successful response
  sendResponse(res, {
    statusCode: httpStatus.HttpStatus.CREATED,
    success: true,
    message: `${result?.email} created successfully!`,
    data: result,
  });
});

export const UserController = {
  createUser,
};
