import Login from "./components/Login";
import './globals.css';
import Link from 'next/link';

const Page = () => {
  return (
    <main className="container mt-5">
      <h1>Booking System</h1>
      <Link href="/api/auth/login">Get Started</Link>
    </main>
  );
};

export default Page;

