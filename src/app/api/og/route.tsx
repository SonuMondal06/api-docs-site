import { websiteFallbackTitle, websiteUrl } from "@/constants";
import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
	const params = req.nextUrl.searchParams;

	const title = params.get("title");
	const src = params.get("src");
	const alt = params.get("alt");
	const widthString = params.get("width");
	const heightString = params.get("height");

	const width = Number.parseInt(widthString ?? "1200");
	const height = Number.parseInt(heightString ?? "630");

	const logo = {
		src: `${websiteUrl}/logos/memorang/icon.svg`,
		alt: "Memorang",
	};

	return new ImageResponse(
		<div
			style={{
				position: "relative",
				display: "flex",
				width: "100%",
				height: "100%",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			{src && (
				<img src={src} alt={alt ?? "Memorang"} width={width} height={height} />
			)}
			<div
				key="overlay-card"
				style={{
					position: "absolute",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					gap: 8,
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					backgroundColor: "rgba(0, 0, 0, 0.7)",
					zIndex: 10,
				}}
			>
				<img
					key="logo"
					src={logo.src}
					alt={logo.alt}
					style={{ width: 100, height: 100 }}
				/>
				<span
					key="title"
					style={{
						fontSize: 48,
						fontWeight: 900,
						color: "#fff",
					}}
				>
					{title}
				</span>
			</div>
			<div
				key="overlay-text"
				style={{
					position: "absolute",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					gap: 8,
					bottom: 0,
					left: 0,
					width: "100%",
					height: 100,
					backgroundColor: "rgba(0, 0, 0, 0.7)",
					zIndex: 20,
				}}
			>
				<span
					key="text"
					style={{
						fontSize: 24,
						fontWeight: 600,
						color: "#fff",
					}}
				>
					{websiteFallbackTitle}
				</span>
			</div>
		</div>,
		{
			width,
			height,
		},
	);
}
