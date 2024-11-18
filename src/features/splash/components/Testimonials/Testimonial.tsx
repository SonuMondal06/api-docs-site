/* -----------------Globals--------------- */
// import Link from "next/link";
import Image from "next/image";

import { Content } from "@/components/Content";
/* -----------------Components--------------- */
import Icon from "@/components/Icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

/* -----------------Helpers--------------- */
import { cn } from "@/lib/utils";
import Link from "next/link";

/* -----------------Types--------------- */
import type { Testimonial } from "../../types";

type Props = Testimonial & { featured?: boolean };

export const TestimonialCard = ({ author, body, featured }: Props) => {
	const authorSubText = author.role ? (
		<div className="text-gray-600 text-sm">
			{author.role} • {author.org}
		</div>
	) : author.handle ? (
		<Link
			href={author.handleHref ?? `#${author.name}`}
			className="text-gray-600 text-sm"
		>
			{author.handle}
		</Link>
	) : null;

	return (
		<Card
			id={author.name}
			className={cn(
				"group relative flex flex-col overflow-hidden bg-white ring-1 ring-gray-900/5",
				{
					"sm:col-span-2 xl:col-start-2 xl:row-end-1": featured,
				},
			)}
		>
			<CardContent>
				<blockquote>
					<Content.AdaptiveText
						textContent={body}
						className={cn("text-base leading-6", {
							"font-semibold tracking-tight sm:p-12 sm:text-lg": featured,
						})}
					/>
				</blockquote>
			</CardContent>

			<CardFooter>
				<figcaption
					className={cn("flex w-full items-center gap-x-4", {
						"flex-wrap gap-y-4 border-gray-900/10 border-t pt-6 sm:flex-nowrap":
							featured,
					})}
				>
					{author.imageUrl && (
						<Avatar className="size-10 flex-none rounded-full">
							<AvatarImage src={author.imageUrl} alt={author.name} />
							<AvatarFallback>
								<Icon name="User" />
							</AvatarFallback>
						</Avatar>
					)}

					<div className={cn({ "flex-auto": featured })}>
						{author.name && (
							<div className="font-semibold text-sm">{author.name}</div>
						)}
						{authorSubText}
					</div>

					{author.logoUrl && (
						<div className="ml-auto">
							<Image
								height={40}
								width={40}
								src={author.logoUrl}
								alt={author.name}
								className={cn("h-6 w-auto flex-none object-contain", {
									"h-12": featured,
								})}
							/>
						</div>
					)}
				</figcaption>
			</CardFooter>
		</Card>
	);
};
