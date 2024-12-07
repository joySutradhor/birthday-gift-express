import ApiError from '../../../errors/ApiError';
import { IStoreyItem } from './storey.interface';
import { StoreyItem } from './storey.model';

//  create menu
const createStoreyItem = async (item: IStoreyItem) => {
  const httpStatus = await import('http-status-ts');

  const existingStorey = await StoreyItem.findOne({
    title: item.title,
    des: item.des,
    images: item.images
  });

  // If a duplicate is found, throw an error or handle it as needed
  if (existingStorey) {
    throw new ApiError(
      httpStatus.HttpStatus.CONFLICT,
      'Slider already exists!',
    );
  }

  // Create the new menu item if no duplicate is found
  const result = await StoreyItem.create(item);
  return result;
};

// get all menu
const getStoreyItems = async (item: IStoreyItem) => {
  const result = await StoreyItem.find(item).sort({ createdAt: -1 });
  return result;
};

const getSingleStoreyItem = async (id: string): Promise<IStoreyItem | null> => {
  const result = await StoreyItem.findById(id);

  return result;
};

const updateStoreyItem = async (
  _id: string,
  payload: Partial<IStoreyItem>,
): Promise<IStoreyItem | null> => {
  const httpStatus = await import('http-status-ts');
  const isExist = await StoreyItem.findById(_id);

  if (!isExist) {
    throw new ApiError(httpStatus.HttpStatus.NOT_FOUND, 'Item not found!');
  }

  const { ...sliderItemData } = payload;

  const updatedItemData: Partial<IStoreyItem> = { ...sliderItemData };

  const result = await StoreyItem.findByIdAndUpdate({ _id }, updatedItemData, {
    new: true,
  });
  return result;
};

// delete menu
const removeStoreyItem = async (id: string) => {
  const result = await StoreyItem.findByIdAndDelete(id);
  return result;
};

export const StoreyItemService = {
  createStoreyItem,
  getStoreyItems,
  getSingleStoreyItem,
  updateStoreyItem,
  removeStoreyItem,
};
