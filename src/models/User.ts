import { Model, model, models, Schema } from "mongoose";

export interface UserType {
  email: string;
  password: string;
  role: "ADMIN" | "USER";
  createdAt: Date;
  _id: string;
}

const userSchema: Schema<UserType> = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "USER",
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

const User: Model<UserType> = models.User || model("User", userSchema);

export default User;
