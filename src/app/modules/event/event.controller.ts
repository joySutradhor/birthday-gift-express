import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import { EventService } from './event.service';
import sendResponse from '../../../shared/sendResponse';
import { IEvent } from './event.interface';

// create menu
const createStoreyItem = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const item = req.body;
  const result = await EventService.createEvent(item);

  sendResponse<IEvent>(res, {
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
  const result = await EventService.getEvents(item);

  sendResponse<IEvent[]>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Item Retrieved SuccessFully',
    data: result,
  });
});

const getSingleStoreyItem = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { id } = req.params;

  const result = await EventService.getSingleEvent(id);

  sendResponse<IEvent>(res, {
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

  const result = await EventService.updateEvent(id, updatedItem);

  sendResponse<IEvent>(res, {
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
  const result = await EventService.removeEvent(id);

  sendResponse<IEvent>(res, {
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
