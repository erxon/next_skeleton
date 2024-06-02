import { redirect } from "next/navigation";
import { signOut } from "../../../auth";

export default async function Page() {
  return (
    <main>
      <div className="mt-12 w-1/2 mx-auto">
        <h1 className="font-medium">Welcome</h1>
        {/* Add User Profile Here */}
        {/* Other users */}
        {/* <div>
          <p className="font-medium mt-2 mb-1">Other Users</p>
          {users.map((user: { id: string; email: string }) => {
            return <User key={user.id} email={user.email} id={user.id} />;
          })}
        </div> */}
        <form
          action={async () => {
            "use server";

            await signOut({ redirect: false });
            redirect("/login");
          }}
        >
          <button className="font-semibold text-teal-900">Sign out</button>
        </form>
      </div>
    </main>
  );
}
