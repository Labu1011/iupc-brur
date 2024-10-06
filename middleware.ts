// middleware.ts
import { NextRequest, NextResponse } from "next/server"

// Define the routes that need to be protected
const protectedRoutes = ["/g"]

export function middleware(request: NextRequest) {
  // Get the user's token from cookies (you can adjust this logic based on your auth method)
  const token = request.cookies.get("token")?.value

  // Clone the URL
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
