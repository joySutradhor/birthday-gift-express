import { Model } from 'mongoose';

export type IFont = {
  name: string;
  filePath: string;
};

export type FontItem = Model<IFont, Record<string, unknown>>;
