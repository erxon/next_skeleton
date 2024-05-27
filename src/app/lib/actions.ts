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
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  let id : string;
  try {
    const data = await user.save();
    id = data.id;
    
  } catch (error) {
    return { message: "Database Error: Something went wrong" };
  }

  redirect(`/welcome/${id}`);
}
