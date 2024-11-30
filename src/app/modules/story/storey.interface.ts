import { Model } from 'mongoose';

export type IStoreyItem = {
  title: string;
  des: string;
};

export type StoreyItemModel = Model<IStoreyItem, Record<string, unknown>>;