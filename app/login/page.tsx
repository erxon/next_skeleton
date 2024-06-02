import Link from "next/link";
import LoginForm from "../ui/auth/login-form";

export default function Page() {
  return (
    <main>
      <div className="w-fit mx-auto mt-12">
        <h1 className="font-medium">Login</h1>
        <div className="mt-5">
          <LoginForm />
          {/* Add Providers (Google, Facebook, Github) */}
        </div>
        <p className="text-center mt-2">
          Redirect to <Link className="text-teal-900 font-medium" href="/auth/signup">Sign up</Link>
        </p>
      </div>
    </main>
  );
}
