import mongoose from "mongoose";
const { Schema } = mongoose;

export interface Users extends mongoose.Document {
  firstName: String;
  lastName: String;
  email: String;
  password: String;
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
  password: { type: String, required: true },
});

export default mongoose.models.User ||
  mongoose.model<Users>("User", userSchema);
