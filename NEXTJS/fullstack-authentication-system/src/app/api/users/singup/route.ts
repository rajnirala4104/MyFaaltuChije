import { connect } from "@/database/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { StatusCodes } from "http-status-codes";


export async function POST(request:NextRequest){
    try {
        
        // getting the data from the user as request
        const reqBody = await request.json();
        // destructring the data from the request body
        const {username, email, password} = reqBody;
        
        // check if user is already exists
        const user = await User.findOne({email});
        if(user){
            return NextResponse.json({
                message: "user is already exist",
                statusCode: StatusCodes.CONFLICT
            })
        }

        // has the password
        const salt = await bcryptjs.genSalt(12);
        const hashedPassword = await bcryptjs.hash(password, salt)

        // create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        const response = await newUser.save();
        console.log(response)

        return NextResponse.json({
            message: "User is created successfully",
            statusCode: StatusCodes.CREATED,
            data: response
        })

    } catch (error) {
        return NextResponse.json({
            message:`Singup Post Request Error - ${error}`,
            statusCode: StatusCodes.INTERNAL_SERVER_ERROR
        })
    }
}

connect();

