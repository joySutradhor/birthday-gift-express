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

const deleteUser = async (userId: string): Promise<IUser> => {
  const httpStatus = await import('http-status-ts');
  try {
    // Find the user by ID and delete
    const deletedUser = await User.findByIdAndDelete(userId);

    // If the user doesn't exist, throw a not found error
    if (!deletedUser) {
      throw new ApiError(
        httpStatus.HttpStatus.NOT_FOUND,
        'User not found or already deleted.',
      );
    }

    // Return the deleted user document
    return deletedUser;
  } catch (error) {
    // Handle other errors
    throw new ApiError(
      httpStatus.HttpStatus.INTERNAL_SERVER_ERROR,
      `Error deleting user: ${error}`,
    );
  }
};

export const UserService = {
  createUser,
  deleteUser,
};
