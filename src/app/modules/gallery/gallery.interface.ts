import { Model } from 'mongoose';

export type IGalleryItem = {
  title?: string;
  img: string;
  url: string;
};

export type GalleryItemModel = Model<IGalleryItem, Record<string, unknown>>;
