/* -----------------Globals--------------- */
import Image from "next/image";

import { ActionButton } from "@/components/ActionButton";
/* -----------------Components--------------- */
import { Content } from "@/components/Content";
import Icon from "@/components/Icon";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
/* -----------------UI--------------- */
import { Separator } from "@/components/ui/separator";

/* -----------------Types--------------- */
import type { Post } from "../../types";

const StickyDetails = ({ content }: { content: Post }) => {
	return (
		<div className="sticky top-24 mt-6 flex gap-x-8 gap-y-2 px-4 py-8 lg:mt-96 lg:flex-col lg:px-0 lg:py-8">
			<div className="flex items-center justify-start gap-4">
				<Avatar>
					<AvatarImage
						src={content.author.imageUrl}
						alt={content.author.name}
					/>
					<AvatarFallback>
						<Icon name="User" size={16} />
					</AvatarFallback>
				</Avatar>
				<p className="font-semibold text-sm">{content.author.name}</p>
			</div>

			<div className="hidden lg:block">
				{Array.isArray(content.otherDetails) &&
					content.otherDetails.map(({ name, description }) => (
						<div key={name}>
							<Separator />
							<div className="flex flex-col py-4">
								<Label className="font-semibold text-sm">{name}</Label>
								<p className="mt-2 text-foreground text-sm">{description}</p>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

const BlogInfo = ({
	content,
	backAction,
}: {
	content: Post;
	backAction?: {
		name: string;
		href: string;
	};
}) => {
	return (
		<div className="flex flex-col gap-y-4 bg-gradient-to-b from-gray-100 to-white">
			{backAction && (
				<div className="mx-auto mt-4 flex w-full max-w-7xl justify-start px-6 lg:px-8">
					<ActionButton {...backAction} iconLeft="ArrowLeft" />
				</div>
			)}

			<div className="flex max-w-7xl gap-x-8 px-6 lg:mx-auto lg:px-8">
				<div className="w-full pt-24 lg:w-3/4">
					<div className="flex items-center gap-x-4">
						<Badge>{content.type}</Badge>
						<time dateTime={content.datetime ?? ""}>
							<Label>{content.date ?? content.datetime ?? ""}</Label>
						</time>
					</div>

					<Content className="mt-4" containerClassName="max-w-none">
						<Content.Title>{content.title}</Content.Title>
						<Content.Text>{content.description}</Content.Text>
					</Content>
					<div className="block lg:hidden">
						<StickyDetails content={content} />
						<Separator />
					</div>

					<Image
						src={content.imageUrl}
						alt={content.title}
						width={2048}
						height={2048}
						className="mt-16 w-full max-w-4xl rounded-xl lg:rounded-t-2xl lg:rounded-b-none"
						loading="eager"
					/>

					{!!content.renderMDX && (
						<Content.MDX
							textContent={content.renderMDX}
							className="w-full max-w-none bg-transparent pt-8 pb-24 lg:border-gray-200 lg:border-x-[1px] lg:bg-white lg:px-8"
						/>
					)}
				</div>

				<div className="hidden lg:block lg:w-1/4">
					<StickyDetails content={content} />
				</div>
			</div>
		</div>
	);
};

export default BlogInfo;
