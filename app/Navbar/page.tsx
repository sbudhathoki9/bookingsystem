import Link from "next/link";
import Login from "../components/Login";

const Navbar = () => {
  return (
    <div className="bg-blue-800 text-white py-4 px-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-500 rounded-full mr-3"></div>
          <span className="text-xl font-semibold">Booking System</span>
        </div>

        <div className="hidden md:flex space-x-4">
          <Link href="#" passHref>
            <span className="cursor-pointer nav-link">Home</span>
          </Link>
          <Link href="#" passHref>
            <span className="cursor-pointer nav-link">About</span>
          </Link>
          <Link href="#" passHref>
            <span className="cursor-pointer nav-link">Services</span>
          </Link>
          <Link href="#" passHref>
            <span className="cursor-pointer nav-link">Contact</span>
          </Link>
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
