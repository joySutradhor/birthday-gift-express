import z from 'zod';

const createStoreyItemZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'field is required!',
    }),
    des: z.string({
      required_error: 'field is required!',
    })
  }),
});

const updateStoreyItemZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    des: z.string().optional(),
    img: z.string().optional(),
  }),
});

export const StoreyItemValidation = {
  createStoreyItemZodSchema,
  updateStoreyItemZodSchema,
};
