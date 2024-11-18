"use client";

/* -----------------Helpers--------------- */
import { cn } from "@/lib/utils";

/* -----------------Components--------------- */
import { Container } from "@/components/Container";
import { Content } from "@/components/Content";
import type { SectionHeader } from "@/types";
import { useState } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

export type TweetCardProps = {
	tweetId: string;
	dark?: boolean;
	className?: string;
} & SectionHeader;

const TweetCard = ({
	title,
	highlightText,
	titleSuffix,
	heading,
	description,
	tweetId,
	dark = false,
	className,
}: TweetCardProps) => {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<Container className={cn("w-full", className)}>
			<div className="mb-10 px-4 lg:px-5">
				<Content justifyContent="center" containerClassName="lg:max-w-4xl">
					<Content.Label textAlign="center">{heading}</Content.Label>
					<Content.Title
						title={title}
						highlightText={highlightText}
						titleSuffix={titleSuffix}
						textAlign="center"
						className="text-white"
					/>
					<Content.AdaptiveText
						textContent={description}
						textAlign="center"
						className="text-white"
					/>
				</Content>
			</div>
			<div className={cn(isLoading && "min-h-[400px]")}>
				<TwitterTweetEmbed
					onLoad={() => setIsLoading(false)}
					tweetId={tweetId}
					options={{
						align: "center",
						theme: dark ? "dark" : "light",
					}}
				/>
			</div>
		</Container>
	);
};

export default TweetCard;
