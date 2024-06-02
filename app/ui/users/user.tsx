import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

export default function User({ email, id }: { email: string; id: string }) {
  return (
    <>
      <div className="flex items-center p-2 outline outline-1 w-80 mb-2">
        <p className="mr-2 w-full">{email}</p>
        <Link
          className="text-teal-900 text-sm font-semibold flex items-center"
          role="button"
          href={`/welcome/${id}`}
        >
          <ArrowForwardIcon className="w-6 h-6" />
        </Link>
      </div>
    </>
  );
}
