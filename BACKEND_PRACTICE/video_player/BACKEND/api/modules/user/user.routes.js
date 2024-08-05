import { Router } from "express";
import { upload } from "../../middlewares/multer.middleware.js";
import { userControllers } from "./user.controllers.js";

const userRouter = Router();

userRouter.get("/", userControllers.getAllTheUser);
userRouter.post(
   "/register",
   upload.single("avatar"),
   userControllers.registration,
);

export { userRouter };
