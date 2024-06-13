import express from "express";
import { getUser } from "../controllers/main.js";

const router = express.Router();

router.get("/user/:id", getUser);

export { router as mainRouter };
