'use server';

import dbConnect from "./db-connect";
import User from "./models/User";
import { redirect } from "next/navigation";

dbConnect().then(() => {
    console.log("Database is running");
}).catch(error => {
    throw new Error(error);
})

export async function createUser(formData: FormData) {
  
  const user = new User({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  try {
    const data = await user.save();
    console.log(data)
  } catch (error) {
    return { message: "Database Error: Something went wrong" };
  }

  redirect('/welcome');
}
