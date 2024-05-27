import fetchUser from "../lib/data";

export default async function Page() {
  const user = fetchUser();
  console.log(user)
  return (
    <>
      <div className="mt-12 w-fit mx-auto">
        <h1 className="font-medium">Welcome user</h1>
        {/* Add User Profile Here */}
        
      </div>
    </>
  );
}
