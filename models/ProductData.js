import mongoose from "mongoose";

const ProductDataSchema = new mongoose.Schema(
  {
    prodId: String,
    totalYearAmount: Number,
    totalYearQuantity: Number,
    year: Number,
    monthlyData: [
      {
        month: String,
        totalAmount: Number,
        totalQuantity: Number,
      },
    ],
    dailyData: [
      {
        date: String,
        totalAmount: Number,
        totalQuantity: Number,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("ProductData", ProductDataSchema);
