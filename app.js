import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import { clientRouter, generalRouter, mgmtRouter, salesRouter } from "./routes";
import { connectDB } from "./db/connect.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1/client", clientRouter);
app.use("/api/v1/general", generalRouter);
app.use("/api/v1/management", mgmtRouter);
app.use("/api/v1/sales", salesRouter);

const port = process.env.PORT || 5174;

async function start() {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
}
