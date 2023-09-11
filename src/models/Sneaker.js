import { Schema, model, models } from "mongoose";

const sneakerSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "The name is required"],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "The price is required"],
    },
    img: {
      type: String,
      required: [true, "Need Image"],
    },
    brand: {
      type: String,
      required: [true, "Need a brand"],
    },
    colors: {
      type: String,
      required: [true, "Need a colors"],
    },
  },
  {
    timestamps: true,
  }
);
export default models.Sneaker || model('Sneaker',sneakerSchema)