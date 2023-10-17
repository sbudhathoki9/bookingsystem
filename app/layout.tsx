import React from "react";
import Head from "next/head";
import Navbar from "./Navbar/page";
import { UserProvider } from "@auth0/nextjs-auth0/client";

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <UserProvider>
      <html>
        <Head>
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
        </Head>
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </UserProvider>
  );
}
