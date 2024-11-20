import { cn } from "@/lib/utils";
import { ConsentDatabase, Controls } from "@/security-compliance";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistSans } from "geist/font/sans";
import type { ReactNode } from "react";
import "@/styles/globals.css";

export { generateSplashMetadata as generateMetadata } from "@/helpers";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={cn("antialiased", GeistSans.className)}>
			<head>
				<ConsentDatabase />
				<Controls />
			</head>
			<body className="flex min-h-screen flex-col">
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
