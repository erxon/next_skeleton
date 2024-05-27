
import mongoose from "mongoose";
const { Schema } = mongoose;

export interface Users extends mongoose.Document {
  email: String,
  password: String
}

const userSchema = new Schema<Users>({
  email: String,
  password: String,
});

export default mongoose.models.User || mongoose.model<Users>("User", userSchema);
