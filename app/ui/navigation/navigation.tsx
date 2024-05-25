import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function Navigation() {
    return (
        <div className="w-screen h-16 flex justify-start">
            <Navbar></Navbar>
            <Sidebar></Sidebar>
        </div>
    );
}