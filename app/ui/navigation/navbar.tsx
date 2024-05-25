import Link from "next/link";

export default function Navbar() {
  return (
    <div className="hidden md:flex w-full h-full bg-gray-900">
      <p className="w-2/12 text-center font-bold text-2xl h-full content-center">Vtech</p>
      <div className="flex flex-grow">
        <Link href="/" className="w-3/12 self-center text-center bg-opacity-20 h-full content-center">Dashboard</Link>
        <Link href="/news" className="w-3/12 self-center text-center h-full content-center">News</Link>
      </div>
    </div>
  );
}
