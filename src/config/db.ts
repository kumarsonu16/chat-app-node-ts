import mongoose from "mongoose";
import { seedData } from "./dataSeedToMongoDb"

const MONGODB_URI = "mongodb://0.0.0.0:27017/chat";

export async function connectDB(): Promise<void> {
    console.log("Please wait connecting to MongoDB...")
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
    await seedData();
   
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit with failure
  }
}

export default mongoose;