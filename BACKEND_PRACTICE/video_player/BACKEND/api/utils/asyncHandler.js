import { StatusCodes } from "http-status-codes";
export const asyncHandler = (requestHandler) => async (req, res, next) => {
   try {
      await requestHandler(req, res, next);
   } catch (error) {
      res.status(error.code || StatusCodes.INTERNAL_SERVER_ERROR).json({
         success: false,
         message: error.message,
      });
   }
};
