"use client"

import { signIn } from "next-auth/react";

const LoginButton = () => {
  return (
    <button
      onClick={() =>
        signIn("google", {
          callbackUrl: "/dashboard",
          redirect: true,
        })
      }
    >
      Google Login
    </button>
  );
};

export default LoginButton;
