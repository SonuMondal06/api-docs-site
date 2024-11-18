import { RootProvider } from "fumadocs-ui/provider";
import type { ReactNode } from "react";
import "@/styles/global.css";
import { cn } from "@/lib/utils";
import { ConsentDatabase, Controls } from "@/security-compliance";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistSans } from "geist/font/sans";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={cn("antialiased", GeistSans.className)}>
			<head>
				<ConsentDatabase />
				<Controls />
			</head>
			<body className="flex min-h-screen flex-col">
				<RootProvider
					theme={{
						enabled: false,
					}}
				>
					{children}
				</RootProvider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
