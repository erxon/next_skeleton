import Link from "next/link";
import HomeIcon from '@mui/icons-material/Home';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto w-fit mt-12">
      <div role="button" className="text-teal-900 rounded mb-3 w-fit">
        <HomeIcon className="mr-1 w-6 h-6" />
        <Link className="align-middle" href="/">Home</Link>
      </div>
      {children}
    </div>
  );
}
