import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <Link href="/api/auth/login" passHref>
      <span className="px-1 py-1 text-sm border border-white hover:bg-gray-700 text-white font-bold rounded nav-link focus:outline-none focus:border-blue-700 focus:shadow-outline active:bg-gray-800 transition duration-150 ease-in-out">
        Get Started
      </span>
    </Link>
  );
};

export default Login;
