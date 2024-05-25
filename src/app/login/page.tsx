import LoginForm from "../ui/auth/login-form";

export default function Page() {
  return (
    <>
      <div className="mx-auto w-fit mt-12">
        <h1 className="font-medium">Login</h1>
        <div className="mt-5">
            <LoginForm />
            {/* Add Providers (Google, Facebook, Github) */}
        </div>
      </div>
    </>
  );
}
