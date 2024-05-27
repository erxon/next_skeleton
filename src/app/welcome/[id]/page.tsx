import { fetchUserById } from "@/app/lib/data";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const user = await fetchUserById(params.id);

  if (!user) {
    notFound();
  }

  const { email, password } = user;

  return (
    <>
      <div className="w-fit mx-auto mt-12">
        <h1 className="mb-2 font-medium">User</h1>
        <p>{email}</p>
      </div>
    </>
  );
}
