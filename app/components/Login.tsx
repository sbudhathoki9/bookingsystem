"use client";
import Button from "./Button";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/Link";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

const Login = () => {
  const { user, error, isLoading } = useUser();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  return (
    <>
      {user ? (
        <div className="relative inline-block text-left">
          <button
            onClick={toggleDropdown}
            data-dropdown-toggle="dropdown"
            className="inline-flex items-center justify-center w-auto h-auto rounded-md border border-gray-800 shadow-sm px-3 py-1 bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
          >
            <FaUser size={18} />
          </button>

          {isDropdownVisible && (
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-900">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div
                  id="dropdown"
                  className="z-10 bg-gray-900 divide-y divide-gray-700 rounded-lg shadow dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-white dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <Link
                      href="#"
                      passHref
                      className="block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span>Profile</span>
                    </Link>
                    <Link
                      href="/api/auth/logout"
                      passHref
                      className="block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span>Logout</span>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <Link href="/api/auth/login" passHref>
          <span className="px-4 py-2 bg-gray-500 text-white font-bold rounded nav-link focus:outline-none focus:border-blue-700 focus:shadow-outline active:bg-blue-800 transition duration-150 ease-in-out">
            Get Started
          </span>
        </Link>
      )}
    </>
  );
};

export default Login;
