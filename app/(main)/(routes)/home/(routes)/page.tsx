import LoginButton from "@/components/login-button";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { useRouter } from "next/navigation";

export default async function Home() {
  const router = useRouter();
  const session = await getServerSession(authOptions);
  const user = await db.user.findFirst({
    where: {
      email: session?.user?.email,
    },
  });
  if (user) {
    return router.replace("/dashboard");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        Hello from the other side. Welcome to Shatez Frontend Interview Task
      </h1>
      <LoginButton />
    </main>
  );
}
