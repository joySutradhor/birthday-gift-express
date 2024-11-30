import { model, Schema } from 'mongoose';
import { FontItem, IFont } from './font.interface';

export const FontSchema = new Schema<IFont, FontItem>(
  {
    name: {
      type: String,
      required: true,
    },
    filePath: {
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

export const Font = model<IFont, FontItem>('Font', FontSchema);
