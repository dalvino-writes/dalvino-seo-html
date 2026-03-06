import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  if (host.startsWith("www.")) {
    const newUrl = request.url.replace(`://${host}`, "://dalvinoseo.com");
    return NextResponse.redirect(newUrl, 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};