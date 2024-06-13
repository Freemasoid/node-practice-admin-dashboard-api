import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import { clientRouter, mainRouter, controlRouter, salesRouter } from "./routes/index.js";
import { connectDB } from "./db/connect.js";

import User from "./models/User.js";
import { dataUser } from "./data.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1/client", clientRouter);
app.use("/api/v1/main", mainRouter);
app.use("/api/v1/management", controlRouter);
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

start();
