import mongoose from "mongoose";

async function connectDB(): Promise<void> {
  if (mongoose.connections[0].readyState) return;
  mongoose.set("strictQuery", false);
  await mongoose.connect(process.env.MONGO_URI as string);
  console.log("Connected to DB");
}

export default connectDB;
