/* -----------------Components--------------- */
import { ActionButton } from "@/components/ActionButton";

/* -----------------Globals--------------- */
import Image from "next/image";

import { getPostUrl } from "@/helpers";
/* -----------------Types--------------- */
import type { Post } from "../../types";

type Props = {
	post: Post;
};

const FeaturedBlog = ({ post }: Props) => {
	return (
		<div className="py-24 sm:py-32">
			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
				<article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
					<time
						dateTime={post.datetime}
						className="block text-gray-600 text-sm leading-6"
					>
						{post.date}
					</time>
					<h2
						id="featured-post"
						className="mt-4 font-bold text-3xl text-gray-900 tracking-tight sm:text-4xl"
					>
						{post.title}
					</h2>
					<p className="mt-4 text-gray-600 text-lg leading-8">
						{post.description}
					</p>
					<div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
						<ActionButton
							name="Continue reading"
							href={getPostUrl(post)}
							icon="ArrowRight"
							className="p-0"
						/>

						<div className="flex lg:border-gray-900/10 lg:border-t lg:pt-8">
							<div className="flex gap-x-2.5 font-semibold text-gray-900 text-sm leading-6">
								<Image
									src={post.author.imageUrl}
									alt={post.author.name}
									className="h-6 w-6 flex-none rounded-full bg-gray-50"
									width={128}
									height={128}
								/>
								{post.author.name}
							</div>
						</div>
					</div>
				</article>
				<div className="mx-auto hidden w-full max-w-2xl border-gray-900/10 border-t pt-12 sm:pt-16 lg:mx-0 lg:flex lg:max-w-none lg:border-t-0 lg:pt-0">
					<Image
						src={post.imageUrl}
						alt={post.title}
						className="size-full rounded-lg object-cover"
						width={2048}
						height={2048}
					/>
				</div>
			</div>
		</div>
	);
};

export default FeaturedBlog;
