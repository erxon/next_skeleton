import User from "./models/User";
import dbConnect from "./db-connect";

dbConnect().then((result) => {
  console.log("Database is running")
}).catch((error) => {
  console.log(error);
})

export async function fetchUserById(id: string) {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    return null;
  }
}

export async function fetchUsers() {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("No users");
  }
}
