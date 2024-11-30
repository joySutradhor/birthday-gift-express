import { model, Schema } from 'mongoose';
import { GalleryItemModel, IGalleryItem } from './gallery.interface';

export const GalleryItemSchema = new Schema<IGalleryItem, GalleryItemModel>(
  {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const GalleryItem = model<IGalleryItem, GalleryItemModel>(
  'Gallery',
  GalleryItemSchema,
);

