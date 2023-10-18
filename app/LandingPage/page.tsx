"use client";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import LoggedInDashBoard from "../LoggedInDashboard/page";
import LoggedOutDashBoard from "../LoggedOutDashBoard/page";

const landingPage = () => {
  const { user, error, isLoading } = useUser();

  return user ? <LoggedInDashBoard /> : <LoggedOutDashBoard />;
};

export default landingPage;
