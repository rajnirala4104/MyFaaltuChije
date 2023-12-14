const { StatusCodes } = require("http-status-codes");
const User = require("../model/user.model");

const userController = {
  getAllUsers: async (req, res, next) => {
    try {
      return res.status(StatusCodes.OK).json({
        message: "ok",
        data: await User.find(),
      });
    } catch (error) {
      next(error);
    }
  },
  insertAndUser: async (req, res, next) => {
    try {
      const { name, email, address, phoneNumber, gender } = req.body;
      const userExists = await User.findOne({ email });
      if (userExists) {
        res.status(400);
        throw new Error("User is alredy exists");
      }
      const response = await User.create({
        name,
        email,
        address,
        phoneNumber,
        gender,
      });
      res.status(StatusCodes.CREATED).json({
        message: "data inserted successfully",
        data: response,
      });
    } catch (error) {
      next(error);
    }
  },
  deleteUser: async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await User.findByIdAndDelete(id);
      return res.status(StatusCodes.OK).json({
        message: "deleted successfully",
        data: null,
      });
    } catch (error) {
      next(error);
    }
  },

  getUserBySearch: async (req, res, next) => {
    console.log("dfasdf");
    const query = req.query.search;
    console.log(query);
    try {
      return res.status(StatusCodes.OK).json({
        message: "ok",
        data: await User.find({ name: query.search }),
      });
    } catch (error) {
      next(EvalError);
    }
  },

  updateUserInfo: async (req, res, next) => {
    try {
      const body = req.body;
      const { id } = req.params;
      // console.log(req.body);
      const response = await User.findOneAndUpdate({ _id: id }, body);
      return res.status(StatusCodes.OK).json({
        message: "data edited successfully",
        data: response.data,
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "INTERNAL SERVER ERROR",
        status: StatusCodes.INTERNAL_SERVER_ERROR,
        data: null,
      });
      next(error);
    }
  },
};

module.exports = { userController };
