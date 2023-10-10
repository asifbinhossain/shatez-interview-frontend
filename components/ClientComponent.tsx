"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const ClientComponent = () => {
  const supabase = createClientComponentClient();

  const [data, setData] = useState();

  const handleClick = async () => {
    const { data, error } = await supabase.from("todos").select("*");
    setData(JSON.stringify(data));
  };

  return (
    <button onClick={handleClick}>{data ? data : "Client Component"}</button>
  );
};

export default ClientComponent;
