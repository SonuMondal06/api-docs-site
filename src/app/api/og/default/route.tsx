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
	fontSize: "84px",
	fontStyle: "normal",
};

export async function GET(req: NextRequest) {
	const params = req.nextUrl.searchParams;

	const title = params.get("title");
	const highlightText = params.get("highlightText");
	const titleSuffix = params.get("titleSuffix");

	const fontArrayBuffers = await getFontArrayBuffers({
		regularFont: regularFontUrl,
		boldItalicFont: boldItalicFontUrl,
	});

	return new ImageResponse(
		<div
			style={{
				position: "relative",
				display: "flex",
				flexDirection: "column",
				width,
				height,
				alignItems: "center",
				backgroundImage: `url(${template_bg})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<img
				key="logo"
				src={logo}
				alt="Memorang"
				width={280}
				style={{ marginTop: "100px" }}
			/>
			<div
				key="content"
				style={{
					margin: "32px 84px",
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
				}}
			>
				{title && (
					<span key="title" style={textStyle}>
						{title}
					</span>
				)}
				{highlightText && (
					<span
						key="highlightText"
						style={{
							...textStyle,
							color: "#22AA99",
							fontStyle: "italic",
							marginLeft: title ? "24px" : 0,
							marginRight: titleSuffix ? "24px" : 0,
						}}
					>
						{highlightText}
					</span>
				)}
				{titleSuffix && (
					<span key="titleSuffix" style={textStyle}>
						{titleSuffix}
					</span>
				)}
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
