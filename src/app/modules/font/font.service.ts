import ApiError from '../../../errors/ApiError';
import { IFont } from './font.interface';
import { Font } from './font.model';

//  create font
const uploadFont = async (item: IFont) => {
  const httpStatus = await import('http-status-ts');

  const existingFont = await Font.findOne({ name: item.name });

  if (existingFont) {
    throw new ApiError(httpStatus.HttpStatus.CONFLICT, 'Font already exists!');
  }

  const result = await Font.create(item);
  return result;
};

// Get all fonts
const getFonts = async (): Promise<IFont[]> => {
  // Retrieve all fonts sorted by creation date (newest first)
  const fonts = await Font.find().sort({ createdAt: -1 });
  return fonts;
};

// Remove font by ID
const removeFont = async (id: string): Promise<void> => {
  const font = await Font.findByIdAndDelete(id);

  if (!font) {
    throw new ApiError(404, 'Font not found!');
  }
};

export const FontService = {
  uploadFont,
  getFonts,
  removeFont,
};
