import { Router } from "express";
import { upload } from "../../middlewares/multer.middleware.js";
import { userControllers } from "./user.controllers.js";

const userRouter = Router();

userRouter.get("/", userControllers.getAllTheUser);
userRouter.post(
   "/register",
   upload.fields([
      {
         name: "avatar",
         maxCount: 1,
      },
      {
         name: "coverImage",
         maxCount: 1,
      },
   ]),
   userControllers.registration,
);
userRouter.post("/login", userControllers.login);

export { userRouter };
