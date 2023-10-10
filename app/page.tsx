import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

import SignOut from "../components/SignOut";
import SignIn from "@/components/Auth/SignIn";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main className="grid min-h-screen place-content-center text-center p-24">
      <div className="bg-stone-100 rounded-lg p-10 text-stone-900">
        <h1 className="text-xl font-bold mb-5">
          Hello from the other side. Welcome to Shatez Frontend Interview Task
        </h1>
        <Link href="/dashboard" className="text-blue-500 hover:text-blue-700">
          Go to Dashboard
        </Link>
      </div>
    </main>
  );
  // return <SignIn />;
}
