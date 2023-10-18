import Login from "./components/Login";
import "./globals.css";
import Link from "next/link";
import Status from "./components/Status";
//import { useUser } from "@auth0/nextjs-auth0/client";

const Page = () => {
  //const { user, error, isLoading } = useUser();
  return (
    <main className="flex flex-col place-items-center gap-4">
      <h1>Booking System</h1>
      <Status />
    </main>
  );
};

export default Page;
