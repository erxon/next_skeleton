import SignupForm from "../ui/auth/signup-form";

export default function Page() {
  return (
    <>
      <div className="mx-auto w-fit mt-12">
        <h1 className="font-medium">Signup</h1>
        <div className="mt-5">
            <SignupForm />
            {/* Add Providers (Google, Facebook, Github) */}
        </div>
      </div>
    </>
  );
}
