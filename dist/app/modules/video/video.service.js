"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoItemService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const video_model_1 = require("./video.model");
//  create menu
const createVideoItem = async (item) => {
    const httpStatus = await import('http-status-ts');
    const existingVideo = await video_model_1.VideoItem.findOne({
        url: item.url
    });
    // If a duplicate is found, throw an error or handle it as needed
    if (existingVideo) {
        throw new ApiError_1.default(httpStatus.HttpStatus.CONFLICT, 'Video already exists!');
    }
    // Create the new menu item if no duplicate is found
    const result = await video_model_1.VideoItem.create(item);
    return result;
};
// get all menu
const getVideoItems = async (item) => {
    const result = await video_model_1.VideoItem.find(item).sort({ createdAt: -1 });
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
const removeVideoItem = async (id) => {
    const result = await video_model_1.VideoItem.findByIdAndDelete(id);
    return result;
};
exports.VideoItemService = {
    createVideoItem,
    getVideoItems,
    removeVideoItem,
};
