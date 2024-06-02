import { fetchUserByEmail } from "../lib/data";
import PersonIcon from "@mui/icons-material/Person";

export default async function User({
  email,
}: {
  email: string | undefined | null;
}) {
  const user = await fetchUserByEmail(email);

  return (
    <div>
      <div className="mb-3">
        <Avatar />
      </div>

      <p className="font-semibold">
        {user.firstName} {user.lastName}
      </p>
      <p>{user.email}</p>
    </div>
  );
}

function Avatar() {
  return (
    <div className="rounded-full bg-teal-600 w-fit p-3 mx-auto">
      <PersonIcon sx={{ width: "100px", height: "100px", color: "white" }} />
    </div>
  );
}
