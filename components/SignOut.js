"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";

export default function SignOut() {
  const supabase = createClientComponentClient();

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      // eslint-disable-next-line no-console
      console.error("ERROR:", error);
    } else {
      redirect("/");
    }
  }

  return (
    <button
      type="button"
      className="button-inverse text-sm font-semibold leading-6 text-stone-700 px-4"
      onClick={handleSignOut}
    >
      Sign Out
    </button>
  );
}
