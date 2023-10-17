"use client";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

const Status = () => {
  const { user, error, isLoading } = useUser();
  return <>{user ? <div>Logged In</div> : <div>Logged Out</div>}</>;
};

export default Status;
