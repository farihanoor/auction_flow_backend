const mongoose = require('mongoose');
const { ObjectId } = mongoose;

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxLength: 70,
    },
    description: {
      type: String,
      maxLength: 2000,
      required: true,
    },
    model: {
      type: String,
      trim: true,
      required: true,
      maxLength: 30,
    },
    startingBid: {
      type: String,
      trim: true,
      required: true,
      maxLength: 32,
    },
    milage: {
      type: String,
    },
    condition: {
      type: String,
      default: 0,
    },
    photo: {
      data: Buffer,
      contentType: String,
      required: false,
    },
    bodyType: {
      type: String,
      required: false,
    },
    engine: {
      type: String,
      required: false,
    },
    transmission: {
      type: String,
      required: false,
    },
    door: {
      type: String,
      required: false,
    },
    sellerId: {
      type: ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
