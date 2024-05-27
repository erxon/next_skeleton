import { fetchUsers } from "../lib/data";
import User from "@/app/ui/users/user";

export default async function Page() {
  const users = await fetchUsers();

  return (
    <>
      <div className="mt-12 w-1/2 mx-auto">
        <h1 className="font-medium">Welcome</h1>
        {/* Add User Profile Here */}
        {/* Other users */}
        <div>
          <p className="font-medium mt-2 mb-1">Other Users</p>
          {users.map((user: { id: string; email: string }) => {
            return <User key={user.id} email={user.email} id={user.id} />;
          })}
        </div>
      </div>
    </>
  );
}
