const expressAsyncHandler = require('express-async-handler');
const { StatusCodes, REQUEST_HEADER_FIELDS_TOO_LARGE } = require('http-status-codes');
const { User } = require('./user.model');
const { generateToken } = require('../../configs/generateJWToken');

const userControllers = {
    registration: expressAsyncHandler(async (req, res) => {
        try {
            const { name, email, password } = req.body;


            if (!name || !email || !password) {
                return res.status(StatusCodes.CONFLICT).json({
                    message: "data is not vailid",
                    status: StatusCodes.CONFLICT,
                    data: null
                })
            }

            const userDoesExist = await User.find({})
            if (userDoesExist.length !== 0) {
                return res.status(StatusCodes.CONFLICT).json({
                    message: "data is already exist in the database",
                    status: StatusCodes.CONFLICT,
                    data: userDoesExist
                })
            }

            const user = await User.create({ name, email, password });
            if (user) {
                return res.status(StatusCodes.CREATED).json({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    token: generateToken(user._id),
                })
            } else {
                res.status(StatusCodes.NOT_FOUND)
                throw new Error("Something went wrong")
            }

        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR)
            throw new Error(error.message)
        }
    }),
    login: expressAsyncHandler(async (req, res) => {
        try {

            const { email, password } = req.body;

            // Find user by email
            const user = await User.findOne({ email });
            if (!user) {
                res.status(StatusCodes.NOT_FOUND);
                throw new Error("Invalid Email or Password");
            }

            // Compare passwords
            const isPasswordMatch = await user.matchPassword(password);
            if (!isPasswordMatch) {
                res.status(StatusCodes.NOT_FOUND);
                throw new Error("Invalid Email or Password");
            }

            // Passwords match, generate token and send response
            return res.status(StatusCodes.OK).json({
                message: "login successfully",
                status: StatusCodes.OK,
                data: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    token: generateToken(user._id),
                }
            });
        } catch (error) {
            return res.status(StatusCodes.NOT_FOUND).json({
                message: "Invailid email and password",
                status: StatusCodes.NOT_FOUND,
                error: error.message,
                data: null
            })

        }
    }),
    update: expressAsyncHandler(async (req, res) => {
        try {
            const { id } = req.params;
            const { name, email } = req.body;
            console.log(id)
            const userDoestExist = await User.find({ _id: id });
            if (!userDoestExist) {
                return res.status(StatusCodes.NOT_FOUND).json({
                    message: "user doesn't exist",
                    status: StatusCodes.NOT_FOUND,
                    data: null
                })
            }
            await User.updateOne({ name, email });


            return res.status(StatusCodes.OK).json({
                message: "updated successfully",
                status: StatusCodes.OK
            })

        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR)
            throw new Error(error.message)
        }
    }),
    delete: expressAsyncHandler(async (req, res) => { })
}

module.exports = { userControllers }