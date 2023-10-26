"use client";
import Link from "next/link";
import React from "react";
import LogoutBtn from "../Login/LogoutBtn";
import { useRouter } from "next/navigation";
const ProfileDropdown = () => {
  const router = useRouter();

  const navigateToProfile = () => {
    router.push("../../UserProfile");
  };

  return (
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
            {/* <Link
              href="/UserProfile/page"
              passHref
              className="block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
            > */}
            <span
              onClick={navigateToProfile}
              className="mouseHover block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Profile
            </span>
            {/* </Link> */}
            <LogoutBtn />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
