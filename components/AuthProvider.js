"use client";

import { createContext, useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export const AuthContext = createContext();

const AuthProvider = ({ accessToken, children }) => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  // const [user, setUser] = useState();

  // useEffect(() => {
  //   const { session, error } = supabase.auth.getSession();

  //   setUser(session?.user ?? null);
  //   const { subscription } = supabase.auth.onAuthStateChange(
  //     async (event, session) => {
  //       setUser(session?.user ?? null);
  //     }
  //   );
  //   return () => {
  //     subscription?.unsubscribe();
  //   };
  // }, []);

  useEffect(() => {
    const {
      data: { subscription: authListener },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
      if (session?.access_token !== accessToken) {
        router.refresh();
      }
    });

    return () => {
      authListener?.unsubscribe();
    };
  }, [accessToken, supabase, router]);

  console.log(accessToken);
  return children;
};

export default AuthProvider;
