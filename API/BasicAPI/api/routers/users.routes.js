const { Router } = require("express");
const userControllers = require("../controllers/userControllers");

const userRouter = Router();

userRouter.get("/", userControllers.getAllUsers);
userRouter.post("/add", userControllers.addUser);
userRouter.get("/:id", userControllers.getUserById);

module.exports = { userRouter };
