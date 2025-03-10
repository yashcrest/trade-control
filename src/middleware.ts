import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    return NextResponse.next();
  },
  {
    pages: {
      signIn: "/login", // Redirect to login if not authenticated
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"],
};
