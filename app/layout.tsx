import React from "react";
import Login from "../components/Login";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Navbar } from "@/components/Navbar";

const layout = () => {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.auth0.com/js/auth0-samples-theme/1.0/css/auth0-theme.min.css"
        />
      </head>
      <body>
        <Navbar></Navbar>
        <Login />
      </body>
    </html>
  );
};

export default layout;
