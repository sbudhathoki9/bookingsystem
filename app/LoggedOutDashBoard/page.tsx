import Link from "next/link";
import React from "react";

const LoggedOutDashBoard = () => {
  return (
    <div>
      <section 
          className="min-h-screen flex items-center justify-center bg-cover bg-center" 
          style={{ backgroundImage: "url('path/to/image.jpg')" }}
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Booking System</h1>
            <p className="text-xl mb-4">Click the Link below to Get Started</p>
            <Link className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            href="api/auth/login">
              Get Started
            </Link>
          </div>
        </section>
    </div>
  );
};

export default LoggedOutDashBoard;
