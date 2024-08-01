import { StatusCodes } from "http-status-codes";
import { DUMMY_USERS } from "../../constants.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

export const userControllers = {
   getAllTheUser: asyncHandler(async (req, res, next) => {
      console.log("entered");
      try {
         res.status(StatusCodes.OK).json({
            message: "here all the users",
            data: DUMMY_USERS,
         });
      } catch (error) {
         throw new Error(error.message);
      }
   }),
};
