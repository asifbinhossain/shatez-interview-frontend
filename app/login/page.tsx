import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import SignIn from "../../components/Auth/SignIn";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data?.session) {
    redirect("/");
  }

  return <SignIn />;
}
