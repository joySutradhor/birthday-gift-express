import ApiError from '../../../errors/ApiError';
import { IVideoItem } from './video.interface';
import { VideoItem } from './video.model';

//  create menu
const createVideoItem = async (item: IVideoItem) => {
  const httpStatus = await import('http-status-ts');

  const existingVideo = await VideoItem.findOne({
    url: item.url
  });

  // If a duplicate is found, throw an error or handle it as needed
  if (existingVideo) {
    throw new ApiError(
      httpStatus.HttpStatus.CONFLICT,
      'Video already exists!',
    );
  }

  // Create the new menu item if no duplicate is found
  const result = await VideoItem.create(item);
  return result;
};

// get all menu
const getVideoItems = async (item: IVideoItem) => {
  const result = await VideoItem.find(item).sort({ createdAt: -1 });
  return result;
};

// const updateVideoItem = async (
//   _id: string,
//   payload: Partial<IVideoItem>,
// ): Promise<IVideoItem | null> => {
//   const httpStatus = await import('http-status-ts');
//   const isExist = await VideoItem.findById(_id);

//   if (!isExist) {
//     throw new ApiError(httpStatus.HttpStatus.NOT_FOUND, 'Item not found!');
//   }

//   const { ...sliderItemData } = payload;

//   const updatedItemData: Partial<IVideoItem> = { ...sliderItemData };

//   const result = await VideoItem.findByIdAndUpdate({ _id }, updatedItemData, {
//     new: true,
//   });
//   return result;
// };

// delete menu
const removeVideoItem = async (id: string) => {
  const result = await VideoItem.findByIdAndDelete(id);
  return result;
};

export const VideoItemService = {
  createVideoItem,
  getVideoItems,
  removeVideoItem,
};
