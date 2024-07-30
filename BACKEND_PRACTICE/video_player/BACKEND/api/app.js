import express from 'express'
import { StatusCodes } from 'http-status-codes';
import cors from 'cors'
import { CORS_ORIGIN, EXPRESS_RATE_LIMIT } from './constants.js';
import cookieParser from 'cookie-parser';
const app = express();

app.use(cors({ origin: CORS_ORIGIN, credentials: true }))
app.use(express.json({ limit: EXPRESS_RATE_LIMIT })) // limit helps to manage the rate of requests to a server in Express.js applications
app.use(express.urlencoded({ limit: EXPRESS_RATE_LIMIT, extended: true }))
app.use(express.static("public"));
app.use(cookieParser())

app.get('/', (req, res) => {
   res.status(StatusCodes.OK).json({
      message: "Api is running successfully",
      status: StatusCodes.OK
   })
})

export { app }