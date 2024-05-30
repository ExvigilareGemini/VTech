"use client";

import { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function Navigation() {
  return (
    <nav className="w-screen h-16 flex justify-start bg-gray-900">
      <Navbar></Navbar>
      <Sidebar />
    </nav>
  );
}
