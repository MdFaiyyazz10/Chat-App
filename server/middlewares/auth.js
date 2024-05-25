import { ErrorHandler } from "../utils/utility.js";
import { TryCatch } from "./error.js";
import jwt from 'jsonwebtoken';


const isAuthenticated = TryCatch(async (req, res, next) => {

    console.log("cookies" , req.cookies.token)
        
    const token = req.cookies.token;

    if(!token) return next(new ErrorHandler("Please Login to access this route" , 401))

    // const decodedData = jwt.verify(token , process.env.JWT_SECRET)


    next();

})

export {isAuthenticated}