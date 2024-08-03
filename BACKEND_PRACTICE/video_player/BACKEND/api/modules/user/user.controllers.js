import { StatusCodes } from "http-status-codes";
import { DUMMY_USERS } from "../../constants.js";
import { ApiError } from "../../utils/apiError.js";
import { ApiResponse } from "../../utils/apiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

export const userControllers = {
   getAllTheUser: asyncHandler(async (req, res, next) => {
      try {
         return res.status(StatusCodes.OK).json({
            message: "Here all the users",
            code: StatusCodes.OK,
            data: DUMMY_USERS,
         });
      } catch (error) {
         return new ApiError(StatusCodes.BAD_REQUEST, "BAD REQUEST");
      }
   }),
   registration: asyncHandler(async (req, res, next) => {}),
   login: asyncHandler(async (req, res, next) => {}),
   updatePassword: asyncHandler(async (req, res, next) => {}),
   updateUser: asyncHandler(async (req, res, next) => {}),
   deleteUserAndAllStuffRelatedToIt: asyncHandler(async (req, res, next) => {}),
};
