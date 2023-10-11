"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

const Providers = (props: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <SessionProvider>{props.children}</SessionProvider>;
};

export default Providers;
