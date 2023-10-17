"use client";
import Button from "./Button";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/Link";

const Login = () => {
  const { user, error, isLoading } = useUser();
  return (
    <>
      {user ? (
        <Link href="/api/auth/logout" passHref>
          <span className="px-4 py-2 bg-blue-500 text-white font-bold rounded nav-link focus:outline-none focus:border-blue-700 focus:shadow-outline active:bg-blue-800 transition duration-150 ease-in-out">
            Logout
          </span>
        </Link>
      ) : (
        <Link href="/api/auth/login" passHref>
          <span className="px-4 py-2 bg-blue-500 text-white font-bold rounded nav-link focus:outline-none focus:border-blue-700 focus:shadow-outline active:bg-blue-800 transition duration-150 ease-in-out">
            Get Started
          </span>
        </Link>
      )}
    </>
  );
};

export default Login;
