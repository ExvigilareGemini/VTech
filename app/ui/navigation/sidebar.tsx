import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="md:hidden">
            <Link href="/">Dashboard</Link>
            <Link href="/news">News</Link>
        </div>
    );
}