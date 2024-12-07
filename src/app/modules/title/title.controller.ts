import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import { TitleService } from './title.service';
import sendResponse from '../../../shared/sendResponse';
import { ITitle } from './title.interface';

// create menu
const createStoreyItem = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const item = req.body;
  const result = await TitleService.createTitle(item);

  sendResponse<ITitle>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: `Item created successfully!`,
    data: result,
  });
});

// get all slider
const getStoreyItems = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const item = req.body;
  const result = await TitleService.getTitles(item);

  sendResponse<ITitle[]>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Item Retrieved SuccessFully',
    data: result,
  });
});

const getSingleStoreyItem = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { id } = req.params;

  const result = await TitleService.getSingleTitle(id);

  sendResponse<ITitle>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Storey Item Retrieved successfully!',
    data: result,
  });
});

// update single slider
const updateStoreyItem = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { id } = req.params;

  const updatedItem = req.body;

  const result = await TitleService.updateTitle(id, updatedItem);

  sendResponse<ITitle>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Item Updated SuccessFully',
    data: result,
  });
});

// delete slider
const removeStoreyItem = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { id } = req.params;
  const result = await TitleService.removeTitle(id);

  sendResponse<ITitle>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Delete Storey SuccessFully',
    data: result,
  });
});

export const SliderItemController = {
  createStoreyItem,
  getStoreyItems,
  getSingleStoreyItem,
  updateStoreyItem,
  removeStoreyItem,
};