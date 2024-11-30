import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import { FontService } from './font.service';
import sendResponse from '../../../shared/sendResponse';
import { IFont } from './font.interface';

// create font
const uploadFont = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const file = req.file;
  const { name } = req.body;

  if (!file) {
    throw new Error('Font file is required');
  }

  const result = await FontService.uploadFont({ name, filePath: file.path });

  sendResponse<IFont>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: `Font uploaded successfully!`,
    data: result,
  });
});

// Get all fonts
const getFonts = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');

  const result = await FontService.getFonts();

  sendResponse<IFont[]>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Fonts retrieved successfully!',
    data: result,
  });
});

// Remove a font
const removeFont = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { id } = req.params;

  await FontService.removeFont(id);

  sendResponse<null>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Font removed successfully!',
    data: null,
  });
});

export const FontController = {
  uploadFont,
  getFonts,
  removeFont,
};
