import Navigation from "@/components/navigation";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  const user = await db.user.findFirst({
    where: {
      email: session?.user?.email,
    },
  });

  return (
    <>
      <Navigation user={user} />
      <div className="lg:pl-72">{children}</div>
    </>
  );
};

export default DashboardLayout;
