import { StatusCodes } from "http-status-codes";
import jsonwebtoken from "jsonwebtoken";
import { ApiError } from "../../utils/apiError.js";
import { ApiResponse } from "../../utils/apiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../../utils/cloudinary.js";
import { User } from "./user.model.js";

const generateAccessAndRefreshToken = async (userId) => {
   try {
      const user = await User.findById(userId);
      const accessToken = user.generateAccessToken();
      const refreshToken = user.generateRefreshToken();

      user.refreshToken = refreshToken;
      await user.save({ validateBeforeSave: false });

      return { accessToken, refreshToken };
   } catch (error) {
      throw new ApiError(
         StatusCodes.INTERNAL_SERVER_ERROR,
         "Something went wrong while generating tokens",
      );
   }
};

export const userControllers = {
   getAllTheUser: asyncHandler(async (req, res) => {}),
   registration: asyncHandler(async (req, res) => {
      // step-1. get all the data from client
      // step-2. check null values and validate rest of the data
      // step-3. check user is already in the database or not
      // step-4. get images
      // step-5. check avatar is given or not
      // step-6. upload images to cloudinary, specially avatar
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
   login: asyncHandler(async (req, res) => {
      // step-1, get email and password from the user
      // step-2, check user is exist or not
      // step-3, check password is correct or not
      // step-4, generate all Tokens
      // step-5, set cookies
      // step-6, get the user's data from the database and send as response

      // step-1
      const { email, userName, password } = req.body;
      if (!email && !userName) {
         throw new ApiError(
            StatusCodes.BAD_REQUEST,
            "userName or email is required",
         );
      }

      // step-2
      const user = await User.findOne({
         $or: [{ email }, { userName }],
      });

      if (!user) {
         throw new ApiError(StatusCodes.NOT_FOUND, "user doesn't exist");
      }

      // step-3
      const validPassword = await user.isPasswordTrue(password);
      if (!validPassword) {
         throw new ApiError(StatusCodes.BAD_REQUEST, "password is not valid");
      }

      // step-4
      const tokens = await generateAccessAndRefreshToken(user._id);

      // step-5
      const option = {
         httpOnly: true,
         secure: true,
      };

      // step-6
      const loggedUser = await User.findOne({ _id: user._id }).select(
         "-password -refreshToken",
      );

      return res
         .status(StatusCodes.OK)
         .cookie("accessToken", tokens.accessToken, option)
         .cookie("refreshToken", tokens.refreshToken, option)
         .json(
            new ApiResponse(StatusCodes.OK, {
               user: loggedUser,
               accessToken: tokens.accessToken,
               refreshToken: tokens.refreshToken,
            }),
         );
   }),
   logOut: asyncHandler(async (req, res) => {
      // step-1 find the user and remove the refreshToken;
      // step-2 clear all the cookies

      // step-1
      await User.findByIdAndUpdate(
         req.user_id,
         {
            $set: {
               refreshToken: undefined,
            },
         },
         { new: true },
      );

      const option = {
         httpOnly: true,
         secure: true,
      };
      // step-2
      return res
         .status(StatusCodes.OK)
         .clearCookie("accessToken", option)
         .clearCookie("refreshToken", option)
         .json(new ApiResponse(StatusCodes.OK, null, "User logged Out"));
   }),
   refreshAccessToken: asyncHandler(async (req, res) => {
      // step-1 get refresh Token
      // step-2 verify that token and decode the data from it which we gave while generating the refreshToken in model
      // step-3 find the user by using _id from the decodedTokenData
      // step-4 generate all the tokens
      // step-5 set the cookies with new tokens that we've just generated

      // step-1
      const incomingRefreshToken =
         req.cookies.refreshToken || req.body.refreshToken;

      if (!incomingRefreshToken) {
         throw new ApiError(StatusCodes.UNAUTHORIZED, "Unauthorized Request");
      }

      try {
         // step-2
         const decodedTokenData = jsonwebtoken.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRETE,
         );

         // step-3
         const user = await User.findById(decodedTokenData._id);

         if (!user) {
            throw new ApiError(
               StatusCodes.UNAUTHORIZED,
               "Invalid RefreshToken",
            );
         }

         // step-4
         const allGeneratedTokens = await generateAccessAndRefreshToken(
            user._id,
         );

         // step-5
         return res
            .status(StatusCodes.OK)
            .cookie("accessToken", allGeneratedTokens.accessToken)
            .cookie("refreshToken", allGeneratedTokens.refreshToken)
            .json(
               new ApiResponse(
                  StatusCodes.OK,
                  {
                     accessToken: allGeneratedTokens.accessToken,
                     refreshToken: allGeneratedTokens.refreshToken,
                  },
                  "Access Token refreshed",
               ),
            );
      } catch (error) {
         throw new ApiError(
            StatusCodes.UNAUTHORIZED,
            error.message || "Invalid refresh Token",
         );
      }
   }),
   updatePassword: asyncHandler(async (req, res) => {
      // step-1 get email or userName and oldPassword and newPassword from the body
      // step-2 validate the given data
      // step-3 find a user with same email or userName that we got from the body
      // step-4 check user is exist or not
      // step-5 check the user's current password with given oldPassword
      // step-6 save the user with newPassword
      // step-7 return the response what you want

      // step-1
      const { email, userName, oldPassword, newPassword } = req.body;
      // step-2
      if ((!email && !userName) || !oldPassword || !newPassword) {
         throw new ApiError(StatusCodes.NOT_FOUND, "all fields are necessary");
      }

      // step-3
      const user = await User.findOne({ $or: [{ email }, { userName }] });
      // step-4
      if (!user) {
         throw new ApiError(StatusCodes.NOT_FOUND, "User does not exist");
      }

      // step-5
      const isPasswordCorrect = await user.isPasswordTrue(oldPassword);

      if (!isPasswordCorrect) {
         throw new ApiError("old password is not correct");
      }

      // step-6
      user.password = newPassword;
      await user.save({ validateBeforeSave: false });

      // step-7
      return res
         .status(StatusCodes.OK)
         .json(
            new ApiResponse(
               StatusCodes.OK,
               {},
               "password updated successfully",
            ),
         );
   }),
   getCurrentUser: asyncHandler(async (req, res) => {
      return res
         .status(StatusCodes.OK)
         .json(
            new ApiResponse(
               StatusCodes.OK,
               req.user,
               "here is the current or logged user",
            ),
         );
   }),
   updateUser: asyncHandler(async (req, res) => {}),
   deleteUserAndAllStuffRelatedToTheUser: asyncHandler(async (req, res) => {}),
};
