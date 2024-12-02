import z from 'zod';

const createMusicItemZodSchema = z.object({
  body: z.object({
    musicUrl: z.string({
      required_error: 'field is required!',
    })
  }),
});



export const MusicItemValidation = {
  createMusicItemZodSchema,
};
