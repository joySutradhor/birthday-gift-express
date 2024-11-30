import { model, Schema } from 'mongoose';
import { StoreyItemModel, IStoreyItem } from './storey.interface';

export const StoreySchema = new Schema<IStoreyItem, StoreyItemModel>(
  {
    title: {
      type: String,
      required: true,
    },
    des: {
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

export const StoreyItem = model<IStoreyItem, StoreyItemModel>('Storey', StoreySchema);
