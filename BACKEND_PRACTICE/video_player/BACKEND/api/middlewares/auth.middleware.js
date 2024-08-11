import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import { User } from "../modules/user/user.model.js";
import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const checkJWTokens = asyncHandler(async (req, _, next) => {
   // step-1 get access token from request
   // step-2 check token is valid or not
   // step-3 verify the token
   // step-4 find a user from the database with _id and email that we gave to the access token

   try {
      // step-1
      const token =
         req.cookies.accessToken ||
         req.header("Authorization").replace("Bearer ", "");

      // step-2
      if (!token) {
         throw new ApiError(
            StatusCodes.UNAUTHORIZED,
            "Unauthorization request",
         );
      }

      // step-3
      const decodedToken = jwt.verify(token, process.env.ACCESS_JWT_SECRET);

      // step-4
      const user = await User.findOne({
         $or: [{ _id: decodedToken._id }, { email: decodedToken.email }],
      }).select("-password -refreshToken");

      // step-5
      if (!user) {
         throw new ApiError(StatusCodes.UNAUTHORIZED, "Invalid Access Token");
      }
      // step-6
      req.user = user;
      next();
   } catch (error) {
      throw new ApiError(StatusCodes.UNAUTHORIZED, error.message);
   }
});
