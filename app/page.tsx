import Login from "./components/Login";
import "./globals.css";
import Link from "next/link";
import Status from "./components/Status";
//import { useUser } from "@auth0/nextjs-auth0/client";

const Page = () => {
  //const { user, error, isLoading } = useUser();
  return (
    <main className="container mt-5">
      <h1>Booking System</h1>
      <Status />
      <Link href="/api/auth/login">Get Started</Link>
    </main>
  );
};

export default Page;
