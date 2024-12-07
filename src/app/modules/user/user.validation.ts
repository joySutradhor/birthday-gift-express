import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'field is required!',
      })
      .email(),
    password: z.string({
        required_error: 'field is required!'
    })
  }),
});

export const UserValidation = {
  createUserZodSchema,
};