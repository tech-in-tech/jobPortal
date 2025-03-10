import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

// register
export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false
      });
    };
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exist",
        success: false,
      })
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    })
    return res.status(201).json({
      message: "Account created successfully.",
      success: true
    })
  } catch (err) {
    console.log(err)
  }
}




// Login

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false
      });
    };
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      })
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        messahe: "Incorrect Password",
        success: false
      })
    }

    // check role is correct or not
    if (role !== user.role) {
      return res.status(400).json({
        message: "Account does not exist with this role",
        success: false
      })
    }

    const tokenData = {
      userId: user._id
    }
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '10d' })
    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      token: token,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile
    }
    return res.status(200).cookie("token", token, { maxAge: 10 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'strict' }).json({
      message: `Welcome back ${user.fullname}`,
      user: user,
      success: true
    })

  } catch (err) {
    console.log(err)
  }
}


// logout
export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "logged out successfully "
    })
  } catch (err) {
    console.log(err)
  }
}


// update Profile
export const updateProfile = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, bio, skills } = req.body;
    const file = req.file;

    // cloudinary setup
    let skillsArray;
    if (skills) {

      skillsArray = skills.split(",");
    }
    const userId = req.id  //middleware authentication
    let user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({
        message: "User Not Found",
        success: false
      })
    }
    // updating data
    if (fullname) user.fullname = fullname;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.bio = bio;
    if (skills) user.profile.skills = skillsArray;


    // resume 
    await user.save();
    return res.status(200).json({
      message: "Profile updated successfully",
      success: true,
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role,
        profile: user.profile
      }
    })

  } catch (error) {
    console.log(error);
  }
}