import mongoose, { Schema } from "mongoose";

enum Status {
  active = 1,
  block = 2,
  delete = 3,
}

// Define the interface representing a vehicle document
interface User {
  username: string;
  password: string;
  status: Status;
}

// Define the schema for the User model
const UserSchema: Schema = new Schema(
  {
    username: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    status: {
      type: Number,
      enum: Status,
      required: true,
      default: 1,
      trim: true,
    },
  },
  { timestamps: true }
);

// Define and export the User model
const UserModel = mongoose.model<User>("User", UserSchema);

export default UserModel;
