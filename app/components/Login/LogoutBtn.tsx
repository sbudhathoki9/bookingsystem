import Link from "next/link";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const LogoutButton = () => {
  return (
    <a
      className="block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
      href="/api/auth/logout"
    >
      {/* <span className="block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"> */}
      Logout
      {/* </span> */}
    </a>
  );
};

export default LogoutButton;
