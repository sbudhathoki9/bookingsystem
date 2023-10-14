import Link from 'next/link';

const Navbar = () => {

  return (
    <div className="bg-blue-800 text-white py-4 px-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-500 rounded-full mr-3"></div>
          <span className="text-xl font-semibold">Booking System</span>
        </div>

        <div className="hidden md:flex space-x-4">
          <Link href="#" passHref><span className="cursor-pointer hover:underline">Home</span></Link>
          <Link href="#" passHref><span className="cursor-pointer hover:underline">About</span></Link>
          <Link href="#" passHref><span className="cursor-pointer hover:underline">Services</span></Link>
          <Link href="#" passHref><span className="cursor-pointer hover:underline">Contact</span></Link>
          <Link href="/api/auth/login" passHref>
            <span className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline active:bg-blue-800 transition duration-150 ease-in-out">
              Get Started
            </span>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
