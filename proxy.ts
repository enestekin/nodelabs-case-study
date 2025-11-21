import { NextResponse } from "next/server";

export function proxy(request: Request) {
  const token = request.headers.get("cookie")?.includes("token=");

  const { pathname } = new URL(request.url);

  const publicRoutes = ["/signin", "/signup"];

  if (token && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!token && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/signin", "/signup", "/dashboard/:path*"],
};
