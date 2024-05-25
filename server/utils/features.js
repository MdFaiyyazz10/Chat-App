import mongoose from "mongoose";
import jwt from "jsonwebtoken"


const cookieToken = {
  maxAge: 15 * 24 * 60 * 60 * 1000 ,
  sameSite: "none",
  httpOnly: true,
  secure: true
}

const connectDB = (uri) => {
  mongoose.connect(uri, { dbName: "Chattu" }).then((data) => console.log(`Connected to DB: ${data.connection.host}`)).catch((err) => { throw err});
};



const sendTokens = (res,user , code , message) => {

  const token = jwt.sign({id: user._id} , process.env.JWT_SECRET);
  console.log(token)

  return res.status(code).cookie("chat-token" , token , cookieToken).json({
    success: true,
    message , 
    user,
  });
  
}

export {connectDB , sendTokens}