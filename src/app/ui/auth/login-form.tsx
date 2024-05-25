"use client";

import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <form>
        <div className="flex flex-col">
          <div className="relative">
            <EmailIcon className="pointer-events-none absolute top-5 left-1 transform -translate-y-1/2 left-3" />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="mb-2 p-2 pl-10 outline outline-1 opacity-50 rounded focus:outline-teal-900 focus:outline-2 focus:opacity-100"
            />
          </div>
          <div className="relative">
            <KeyIcon className="pointer-events-none w-6 h-6 absolute top-5 left-1 transform -translate-y-1/2 left-3" />
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="peer w-full block p-2 pl-10 appearance-none outline outline-1 opacity-50 rounded focus:outline-teal-900 focus:outline-2 focus:opacity-100"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              type="button"
              className="absolute right-1 bottom-2"
            >
              {showPassword ? (
                <VisibilityOffIcon className="ml-2 text-teal-900" />
              ) : (
                <VisibilityIcon className="ml-2 text-teal-900" />
              )}
            </button>
          </div>
          <button className="bg-teal-900 text-white p-2 rounded mt-3">Login</button>
        </div>
      </form>
    </>
  );
}
