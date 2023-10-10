import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

const ServerComponent = async () => {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase.from("todos").select("*");

  return <div>{JSON.stringify(data)}</div>;
};

export default ServerComponent;
