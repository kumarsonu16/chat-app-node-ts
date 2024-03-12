import { Request, Response } from "express";
import {
  loginUser,
} from "./userService";

export const login = async (req: Request,res: Response): Promise<any> => {
  try {
    const user = await loginUser(req.body);

    // If there are no user, return a 204 response
    if (!user) {
      return res.status(401).json({ message: "Please send correct credential" });
    }
    return res.status(200).json({data: { id: user._id, username: user.username}, message: "Logged in successfully" });
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
