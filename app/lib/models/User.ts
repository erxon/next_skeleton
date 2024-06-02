import mongoose from "mongoose";
const { Schema } = mongoose;

export interface Users extends mongoose.Document {
  firstName: String;
  lastName: String;
  email: String;
  hash: String;
  salt: String;
  createdAt: Date;
}

const userSchema = new Schema<Users>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  hash: String,
  salt: String,
  createdAt: Date,
});

export default mongoose.models.User ||
  mongoose.model<Users>("User", userSchema);
