import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LEGACY_URL = "https://app.memorang.com";

export function middleware(request: NextRequest) {
	const endpoint = request.nextUrl.pathname;

	const redirectURL = new URL(endpoint, LEGACY_URL);
	return NextResponse.redirect(redirectURL, 302);
}

export const config = {
	matcher: [
		"/category/:path*",
		"/create/:path*",
		"/edit/:path*",
		"/flashcards/:path*",
		"/folder/:path*",
		"/premium/:path*",
		"/questions/:path*",
		"/schedule/:path*",
		"/session/:path*",
		"/settings/:path*",
		"/topic/:path*",
		"/user/:path*",
		"/create-account",
		"/created",
		"/dashboard",
		"/favorites",
		"/forgot",
		"/login",
		"/logout",
		"/profile",
		"/recent",
		"/redeem",
		"/reset-password",
		"/settings",
		"/shared",
		"/store",
		"/study-packs",
		"/tasks",
	],
};
