/* -----------------Globals--------------- */
import { ImageResponse } from "next/og";

/* -----------------Types--------------- */
import type { NextRequest } from "next/server";

/* -----------------Helpers--------------- */
import { boldItalicFontUrl, regularFontUrl, websiteUrl } from "@/constants";
import { getFontArrayBuffers } from "@/helpers";

const logo = `${websiteUrl}/logos/memorang/organization/dark.svg`;
const template_bg = `${websiteUrl}/assets/og-template-bg.png`;

const width = 1200;
const height = 630;

const textStyle = {
	color: "#fff",
	fontSize: "32px",
	fontStyle: "normal",
};

export async function GET(req: NextRequest) {
	const params = req.nextUrl.searchParams;

	const title = params.get("title");
	const tagline = params.get("tagline");
	const image = params.get("image");
	const icon = params.get("icon");
	const size = params.get("size") ?? "480";
	const frame = ["default", "cover", "mobile"].includes(
		params.get("frame") || "",
	)
		? params.get("frame")
		: "default";

	const fontArrayBuffers = await getFontArrayBuffers({
		regularFont: regularFontUrl,
		boldItalicFont: boldItalicFontUrl,
	});

	let imageElement: React.ReactElement | null = null;

	if (image) {
		if (frame === "default") {
			imageElement = (
				<img
					key="image"
					src={image}
					alt="Memorang"
					style={{
						position: "absolute",
						inset: 0,
						objectFit: "cover",
						width: `${size}px`,
						height: `${size}px`,
						borderRadius: "60px",
						backgroundColor: "white",
					}}
				/>
			);
		} else if (frame === "cover") {
			imageElement = (
				<img
					key="image"
					src={image}
					alt="Memorang"
					style={{
						position: "absolute",
						height: "100%",
						left: 0,
						top: 0,
					}}
				/>
			);
		} else if (frame === "mobile") {
			imageElement = (
				<img
					key="image"
					src={image}
					alt="Memorang"
					style={{
						position: "absolute",
						height: "90%",
						inset: 0,
						borderRadius: "20px",
						marginRight: "48px",
					}}
				/>
			);
		}
	}

	return new ImageResponse(
		<div
			style={{
				position: "relative",
				display: "flex",
				width,
				height,
				backgroundImage: `url(${template_bg})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div
				key="text-content"
				style={{
					position: "relative",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					padding: "64px 0px 64px 96px",
					flex: 1,
				}}
			>
				<div
					key="title-content"
					style={{
						display: "flex",
						gap: "16px",
						alignItems: "center",
					}}
				>
					{icon && <img src={icon} alt="Memorang" width={48} />}
					<span key="title" style={textStyle}>
						{title}
					</span>
				</div>
				<span
					key="tagline"
					style={{
						...textStyle,
						fontStyle: "italic",
						color: "#22AA99",
						fontSize: "48px",
						marginTop: "48px",
						flex: 1,
					}}
				>
					{tagline}
				</span>
				<img src={logo} alt="Memorang" width={200} />
			</div>
			<div
				key="image-frame"
				style={{
					position: "relative",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					paddingRight: "200px",
					flex: 1,
				}}
			>
				{/* Apparently, the order of elements matter over here,
        when the image gets converted to PNG format, so the border
        element should be placed before the image tag */}

				{frame === "default" && (
					<div
						key="border-frame"
						style={{
							position: "absolute",
							inset: 0,
							width: `${size}px`,
							height: `${size}px`,
							borderRadius: "60px",
							border: "4px solid #22AA99",
							transform: "rotate(12deg)",
						}}
					/>
				)}

				{imageElement}
			</div>
		</div>,
		{
			width,
			height,
			fonts: [
				{
					name: "Open Sans",
					data: fontArrayBuffers.regularFont,
					style: "normal",
				},
				{
					name: "Open Sans",
					data: fontArrayBuffers.boldItalicFont,
					style: "italic",
				},
			],
		},
	);
}
