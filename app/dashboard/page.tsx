import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import AppLayout from "../../components/AppLayout";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  // const supabase = createServerComponentClient({ cookies });

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // if (!user) {
  //   redirect("/login");
  // }

  return <AppLayout />;
}
