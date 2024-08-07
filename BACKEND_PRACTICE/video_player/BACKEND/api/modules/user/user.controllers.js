import { StatusCodes } from "http-status-codes";
import { ApiError } from "../../utils/apiError.js";
import { ApiResponse } from "../../utils/apiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../../utils/cloudinary.js";
import { User } from "./user.model..js";

export const userControllers = {
   getAllTheUser: asyncHandler(async (req, res) => {}),
   registration: asyncHandler(async (req, res) => {
      // step-1. get all the data from client
      // step-2. check null values and validate rest of thedata
      // step-3. check user is already in the database or not
      // step-4. get images
      // step-5. check avatar is given or not
      // step-6. upload images to cloudinary, specialy avatar
      // step-7. check are we getting the image url or not
      // step-8. create user object and upload to the mongodb database
      // step-9. remove password and refreshToken field from response
      // step-10. return response

      // step-1
      const { userName, fullName, email, password } = req.body;

      // step-2
      if (!userName || !fullName || !email || !password)
         throw new ApiError(StatusCodes.NOT_FOUND, "Fill all the field");

      // step-3
      if (await User.findOne({ $or: [{ userName }, { email }] }))
         throw new ApiError(
            StatusCodes.NOT_FOUND,
            "User with email or username already exist ",
         );

      if (!req.files.avatar)
         throw new ApiError(StatusCodes.NOT_FOUND, "avatar is required");

      //   step - 4
      const avatarLocalPath = req.files.avatar[0].path;
      let coverImagePath;
      if (
         req.files &&
         req.files.coverImage &&
         req.files.coverImage.length > 0
      ) {
         coverImagePath = req.files.coverImage[0].path;
      }

      // step-5
      if (!avatarLocalPath)
         throw new ApiError(StatusCodes.NOT_FOUND, "avatar is required");

      // step-6
      const avatarResponse = await uploadOnCloudinary(avatarLocalPath);
      if (coverImagePath) {
         var coverImageResponse = await uploadOnCloudinary(coverImagePath);
      }

      // step - 7
      if (!avatarResponse)
         throw new ApiError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            "Oops!! avatar not uploaded",
         );

      // step - 8
      const userResponse = await User.create({
         fullName,
         userName,
         email,
         password,
         avatar: avatarResponse,
         coverImage: coverImageResponse,
      });

      // step- 9
      const createdUser = await User.find({ _id: userResponse._id }).select(
         "-password -refreshToken",
      );

      if (!createdUser)
         throw new ApiError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            "use is not created",
         );

      // step - 10
      return res
         .status(StatusCodes.CREATED)
         .json(
            new ApiResponse(
               StatusCodes.CREATED,
               "user has been created",
               createdUser,
            ),
         );
   }),
   login: asyncHandler(async (req, res) => {}),
   updatePassword: asyncHandler(async (req, res) => {}),
   updateUser: asyncHandler(async (req, res) => {}),
   deleteUserAndAllStuffRelatedToIt: asyncHandler(async (req, res) => {}),
};
