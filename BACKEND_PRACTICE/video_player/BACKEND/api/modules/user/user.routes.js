import { Router } from "express";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { userControllers } from "./user.controllers.js";
const userRouter = Router();

userRouter.get("/", userControllers.getAllTheUser);

export { userRouter };
