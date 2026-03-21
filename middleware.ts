import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const { pathname } = request.nextUrl;

  if (host.startsWith("www.")) {
    const newUrl = request.url.replace(`://${host}`, "://archoric.com");
    return NextResponse.redirect(newUrl, 301);
  }

  if (pathname.startsWith("/private-diagnostics/")) {
    const basicAuth = request.headers.get("authorization");

    const username = process.env.DIAGNOSTIC_USER;
    const password = process.env.DIAGNOSTIC_PASSWORD;

    if (!basicAuth) {
      return new NextResponse("Authentication required", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Private Diagnostic"',
        },
      });
    }

    const authValue = basicAuth.split(" ")[1];
    const [user, pass] = atob(authValue).split(":");

    if (user !== username || pass !== password) {
      return new NextResponse("Access denied", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Private Diagnostic"',
        },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};