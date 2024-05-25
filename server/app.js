import express from "express";
import { connectDB } from "./utils/features.js";
import dotenv from "dotenv";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";
import cors from 'cors'


import userRoute from "./routes/user.js";


dotenv.config({
  path: "./config/config.env",
});

const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 3000;

connectDB(mongoURI);


const app = express();


// Using Middlewares Here
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())


app.use("/api/v1/user", userRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// export { envMode, adminSecretKey, userSocketIDs };