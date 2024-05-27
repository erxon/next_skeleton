"use client";

import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { createUser } from "@/app/lib/actions";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  return (
    <>
      <form action={createUser}>
        <div className="flex flex-col">
          <div className="flex mb-2 ">
            <input
              className="mr-2 p-2 outline outline-1 opacity-50 rounded focus:outline-teal-900 focus:outline-2 focus:opacity-100"
              name="firstName"
              type="text"
              placeholder="First name"
            />
            <input
              className="p-2 outline outline-1 opacity-50 rounded focus:outline-teal-900 focus:outline-2 focus:opacity-100"
              name="lastName"
              type="text"
              placeholder="Last name"
            />
          </div>
          <div className="relative">
            <EmailIcon className="pointer-events-none absolute top-5 left-1 transform -translate-y-1/2 left-3" />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full mb-2 p-2 pl-10 outline outline-1 opacity-50 rounded focus:outline-teal-900 focus:outline-2 focus:opacity-100"
            />
          </div>

          {/* Password */}

          <div className="relative mb-2">
            <KeyIcon className="pointer-events-none w-6 h-6 absolute top-5 left-1 transform -translate-y-1/2 left-3" />
            <input
              name="password"
              type={showPassword.password ? "text" : "password"}
              placeholder="Password"
              className="peer w-full block p-2 pl-10 appearance-none outline outline-1 opacity-50 rounded focus:outline-teal-900 focus:outline-2 focus:opacity-100"
            />
            <button
              onClick={() =>
                setShowPassword({
                  password: !showPassword.password,
                  confirmPassword: showPassword.confirmPassword,
                })
              }
              type="button"
              className="absolute right-1 bottom-2"
            >
              {showPassword.password ? (
                <VisibilityOffIcon className="ml-2 text-teal-900" />
              ) : (
                <VisibilityIcon className="ml-2 text-teal-900" />
              )}
            </button>
          </div>

          {/* Confirm Password */}

          <div className="relative">
            <KeyIcon className="pointer-events-none w-6 h-6 absolute top-5 left-1 transform -translate-y-1/2 left-3" />
            <input
              name="confirmPassword"
              type={showPassword.confirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="peer w-full block p-2 pl-10 appearance-none outline outline-1 opacity-50 rounded focus:outline-teal-900 focus:outline-2 focus:opacity-100"
            />
            <button
              onClick={() =>
                setShowPassword({
                  confirmPassword: !showPassword.confirmPassword,
                  password: showPassword.password,
                })
              }
              type="button"
              className="absolute right-1 bottom-2"
            >
              {showPassword.confirmPassword ? (
                <VisibilityOffIcon className="ml-2 text-teal-900" />
              ) : (
                <VisibilityIcon className="ml-2 text-teal-900" />
              )}
            </button>
          </div>
          <button className="bg-teal-900 text-white p-2 rounded mt-3">
            Signup
          </button>
        </div>
      </form>
    </>
  );
}
