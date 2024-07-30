import dotenv from 'dotenv'
import express from 'express'
import { connectDB } from './database/index.js'
dotenv.config();
connectDB();

// const app = express();

