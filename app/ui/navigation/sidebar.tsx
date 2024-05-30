import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import menuBurgerSvg from "@/public/burger-menu-svgrepo-com.svg";

// {isOpen,toggleSidebar}: {isOpen:boolean, toggleSidebar:() => void}
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="p-4 md:hidden">
        <Image src={menuBurgerSvg} width={30} height={30} alt="Sidebar opening button"></Image>
      </button>
      <div
        className={`md:hidden flex flex-col h-full bg-gray-900 absolute w-64 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button onClick={() => setIsOpen(!isOpen)} className="self-end p-4 hover:bg-gray-800">X</button>
        <Link className="p-4 hover:bg-gray-800" href="/">
          Dashboard
        </Link>
        <Link className="p-4 hover:bg-gray-800" href="/news">
          News
        </Link>
      </div>
    </>
  );
}
