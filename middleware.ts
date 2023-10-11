import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: async ({ req, token }) => {
      console.log(token);
      // if (req.nextUrl.pathname.startsWith("/")) return token?.role === "user";
      return !!token;
    },
  },
});
export const config = { matcher: ["/", "/dashboard"] };
