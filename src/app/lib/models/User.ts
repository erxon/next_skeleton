
import mongoose from "mongoose";
const { Schema } = mongoose;

export interface Users extends mongoose.Document {
  firstName: String,
  lastName: String,
  email: String,
  password: String
}

const userSchema = new Schema<Users>({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

export default mongoose.models.User || mongoose.model<Users>("User", userSchema);
