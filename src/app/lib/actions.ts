"use server";

import dbConnect from "./db-connect";
import User from "./models/User";
import { redirect } from "next/navigation";
import { z } from "zod";
import hashPassword from "./utilities/hash-password";
import { isEmpty } from "./utilities/for-form";

dbConnect()
  .then(() => {
    console.log("Database is running");
  })
  .catch((error) => {
    throw new Error(error);
  });

const FormSchema = z.object({
  firstName: z.string({
    invalid_type_error: "Please add a first name.",
  }),
  lastName: z.string({
    invalid_type_error: "Please add a last name.",
  }),
  email: z.string({
    invalid_type_error: "Please add an email.",
  }),
  password: z.string({
    invalid_type_error: "Please add a password.",
  }),
  confirmPassword: z.string({
    invalid_type_error: "confirm your password.",
  }),
});

export type State = {
  errors?: {
    firstName?: string[];
    lastName?: string[];
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
  passwordError?: string | null;
  message?: string | null;
};

export async function createUser(prevState: State, formData: FormData) {
  const validatedFields = FormSchema.safeParse({
    firstName: isEmpty("firstName", formData)
      ? null
      : formData.get("firstName"),
    lastName: isEmpty("firstName", formData) ? null : formData.get("lastName"),
    email: isEmpty("email", formData) ? null : formData.get("email"),
    password: isEmpty("password", formData) ? null : formData.get("password"),
    confirmPassword: isEmpty("confirmPassword", formData)
      ? null
      : formData.get("confirmPassword"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create User.",
      passwordError: "",
    };
  }

  const { firstName, lastName, email, password, confirmPassword } =
    validatedFields.data;

  if (password !== confirmPassword) {
    return {
      passwordError: "Password did not match.",
    };
  }

  //encrypt password

  let encryptPassword = { salt: "", hash: "" };
  try {
    const encryptedPassword = await hashPassword(password);
    encryptPassword = { ...encryptedPassword };
  } catch (error) {
    return { message: "Encryption Error" };
  }

  const user = new User({
    firstName: firstName,
    lastName: lastName,
    email: email,
    salt: encryptPassword.salt,
    hash: encryptPassword.hash,
    createdAt: new Date(),
  });

  let id: string;
  try {
    const data = await user.save();
    id = data.id;
  } catch (error) {
    return { message: "Database Error: Something went wrong" };
  }

  redirect(`/welcome/${id}`);
}
