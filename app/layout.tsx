import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import AuthProvider from "../components/AuthProvider";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shatez Frontend Interview Task",
  description:
    "Complete the tasks to the best of your abilities & taking necessary assymptions",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const accessToken = session?.access_token || null;

  return (
    <html lang="en" className="h-full bg-white">
      <body className="h-full w-full">
        <AuthProvider accessToken={accessToken}>{children}</AuthProvider>
      </body>
    </html>
  );
}
