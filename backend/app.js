import express from "express";
import userRouter from "./routes/user.js";
import postRouter from "./routes/post.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";


config({path:"backend/config/config.env"})
const app = express();

// using middlewares
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//using routes
app.use("/api/v1",userRouter)
app.use("/api/v1",postRouter)



export default app;