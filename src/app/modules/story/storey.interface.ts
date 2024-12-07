import { Model } from 'mongoose';

export type IStoreyItem = {
  title: string;
  des: string;
  images: string[]
};

export type StoreyItemModel = Model<IStoreyItem, Record<string, unknown>>;