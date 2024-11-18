import PortableText, { type PortableContent } from "./PortableText";
/* -----------------Components--------------- */
import Text from "./Text";

/* -----------------Types--------------- */
import type { TextProps } from "./types";

export type AdaptiveTextContent = string | PortableContent;

export type AdaptiveTextProps = {
	textContent?: AdaptiveTextContent | null;
} & Omit<TextProps<"div">, "as" | "children">;

function AdaptiveText({ className, textContent, ...props }: AdaptiveTextProps) {
	if (textContent == null) {
		return null;
	}

	return (
		<>
			{typeof textContent === "string" ? (
				<Text className={className} {...props}>
					{textContent}
				</Text>
			) : (
				<PortableText value={textContent} className={className} {...props} />
			)}
		</>
	);
}

export default AdaptiveText;
