/* -----------------Components--------------- */
import Image from "next/image";
import Link from "next/link";

import { getPostUrl } from "@/helpers";
/* -----------------Types--------------- */
import type { Post } from "../../types";

type Props = {
	posts: Post[];
	title?: string;
};

const BlogsListItem = ({ post }: { post: Post }) => {
	return (
		<article className="relative isolate flex flex-col gap-8 lg:flex-row">
			<div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
				<Image
					src={post.imageUrl}
					alt={post.title}
					className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
					width={2048}
					height={2048}
				/>
				<div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
			</div>
			<div>
				<div className="flex items-center gap-x-4 text-xs">
					<time dateTime={post.datetime} className="text-gray-500">
						{post.date}
					</time>
				</div>
				<div className="group relative max-w-xl">
					<h3 className="mt-3 font-semibold text-gray-900 text-lg leading-6 group-hover:text-gray-600">
						<Link href={getPostUrl(post)}>
							<span className="absolute inset-0" />
							{post.title}
						</Link>
					</h3>
					<p className="mt-5 text-gray-600 text-sm leading-6">
						{post.description}
					</p>
				</div>
				<div className="mt-6 flex border-gray-900/5 border-t pt-6">
					<div className="relative flex items-center gap-x-4">
						<Image
							src={post.author.imageUrl}
							alt={post.author.name}
							className="h-10 w-10 rounded-full bg-gray-50"
							width={128}
							height={128}
						/>
						<div className="text-sm leading-6">
							<p className="font-semibold text-gray-900">
								<span className="absolute inset-0" />
								{post.author.name}
							</p>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

const BlogsList = ({
	title = "Look what experts have to say!",
	posts,
}: Props) => {
	return (
		<div className="bg-gray-100 py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="font-bold text-3xl text-gray-900 tracking-tight sm:text-4xl">
					{title}
				</h2>
				<div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
					{posts.map((post) => (
						<BlogsListItem key={post.slug} post={post} />
					))}
				</div>
			</div>
		</div>
	);
};

export default BlogsList;
