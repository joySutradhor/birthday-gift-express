import ApiError from '../../../errors/ApiError';
import { IUser } from './user.interface'; // Replace with your actual interface path
import { User } from './user.model'; // Replace with your actual model path

const createUser = async (userData: IUser): Promise<IUser> => {
  const httpStatus = await import('http-status-ts');
  try {
    // Create the user in the database
    const user = await User.create(userData);

    // Return the created user document
    return user;
  } catch (error) {
    // Handle specific errors, e.g., validation, duplicates
    throw new ApiError(
      httpStatus.HttpStatus.BAD_REQUEST,
      `Error creating user: ${error}`,
    );
  }
};

export const UserService = {
  createUser,
};
