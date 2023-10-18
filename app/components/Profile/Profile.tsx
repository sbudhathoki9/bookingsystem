"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/Link";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

import LoginBtn from "../Login/LoginBtn";
import LogoutBtn from "../Login/LogoutBtn";
import ProfileDropdown from "./ProfileDropdown";

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

          {isDropdownVisible && <ProfileDropdown />}
        </div>
      ) : (
        <LoginBtn />
      )}
    </>
  );
};

export default Login;
