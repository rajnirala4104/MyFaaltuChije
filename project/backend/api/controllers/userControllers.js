const { StatusCodes } = require("http-status-codes");
const User = require("../model/user.model");

const userController = {
   getAllUsers: async (req, res) => {
      return res.status(StatusCodes.OK).json({
         message: "ok",
         data: await User.find(),
      });
   },
   insertAndUser: async (req, res) => {
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
   },
};

module.exports = { userController };
