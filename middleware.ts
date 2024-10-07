// middleware.ts
import { NextRequest, NextResponse } from "next/server"
import Cookies from "js-cookie"

// Define the routes that need to be protected
const protectedRoutes = ["/b48ff5fe15"]

export function middleware(request: NextRequest) {
  const token = Cookies.get("access_token")

  const url = request.nextUrl.clone()

  // Check if the request is for a protected route
  if (protectedRoutes.includes(url.pathname)) {
    // If the user is not authenticated, redirect to home
    if (!token) {
      url.pathname = "/" // Redirect to home
      return NextResponse.redirect(url)
    }
  }

  // Allow the request to proceed if authenticated
  return NextResponse.next()
}

// Configure which routes will use this middleware
export const config = {
  matcher: ["/b48ff5fe15/:path*"],
}
