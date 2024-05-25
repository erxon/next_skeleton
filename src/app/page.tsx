export default function Home() {
  return (
    <main>
      <div className="w-fit mx-auto mt-12">
        <h1 className="font-medium text-center">Next JS Starting Template</h1>
        <div className="mb-5">
          <p className="text-center">
            Features: MongoDB and NextAuth Authentication
          </p>
          <p className="text-center text-slate-500">Made by Ericson Castasus</p>
        </div>

        <div className="text-center">
          <a
            role="button"
            className="bg-teal-900 text-white p-2 rounded mr-1"
            href="/auth/login"
          >
            Login
          </a>
          <a
            role="button"
            href="/auth/signup"
            className="outline outline-teal-900 outline-1 p-2 rounded"
          >
            Sign up
          </a>
        </div>
      </div>
    </main>
  );
}
