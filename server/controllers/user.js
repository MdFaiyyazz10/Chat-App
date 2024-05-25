import { TryCatch } from "../middlewares/error.js";
import { User } from "../models/user.js";
import { sendTokens } from "../utils/features.js";
import { compare } from "bcrypt";
import { ErrorHandler } from "../utils/utility.js";

const newUser = TryCatch(async (req, res, next) => {
  const { name, bio, username, password } = req.body;

  const avatar = {
    public_id: "asdfghj",
    url: "wertcfbh",
  };

  const user = await User.create({ name, bio, username, password, avatar });

  // return res.status(201).json({success: true , message: "User Created Successfully"})

  sendTokens(res, user, 201, "User Created Successfully");
});

// Login User and save token in cookie
const login = TryCatch(async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username }).select("+password");
  // console.log(username)

  if (!user) return next(new ErrorHandler("Invalid Credentials", 404));

  const isMatch = await compare(password, user.password);

  if (!isMatch) return next(new ErrorHandler("Invalid Credentials", 404));

  // console.log("user Authenticated" , user)
  sendTokens(res, user, 200, `Welcome Back ${user.name}`);
});

const getMyProfile = (req,res) => {
  console.log("Authenticated User: " , req.user)
  res.status(200).json({success: true , data: "user.data"})
}

export { newUser, login, getMyProfile };
