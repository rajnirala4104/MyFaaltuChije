import { Router } from "express";
import { checkJWTokens } from "../../middlewares/auth.middleware.js";
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
userRouter.post("/logout", checkJWTokens, userControllers.logOut);
userRouter.post("/refresh-access-token", userControllers.refreshAccessToken);
userRouter.post("/update-password", userControllers.updatePassword);

export { userRouter };
