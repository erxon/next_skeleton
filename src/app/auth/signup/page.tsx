'use client';

import SignupForm from "@/app/ui/auth/signup-form";
import Link from "next/link";

export default function Page() {
 
  return (
    <>
      <div>
        <h1 className="font-medium">Signup</h1>
        <div className="mt-5">
            <SignupForm />
            {/* Add Providers (Google, Facebook, Github) */}
        </div>
        <p className="text-center mt-2">
          Redirect to <Link className="text-teal-900 font-medium" href="/auth/login">Login</Link>
        </p>
      </div>
    </>
  );
}
