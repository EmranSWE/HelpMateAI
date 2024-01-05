import { UserButton } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>Protected</h1>
      <UserButton afterSignOutUrl="/"></UserButton>
    </div>
  );
};

export default page;
