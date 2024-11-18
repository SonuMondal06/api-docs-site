/* -----------------Components--------------- */
import { ActionButton } from "@/components/ActionButton";

/* -----------------Globals--------------- */
import Image from "next/image";
import Link from "next/link";

import { getPostUrl } from "@/helpers";
/* -----------------Types--------------- */
import type { Post } from "../../types";

type Props = {
	posts: Post[];
	title?: string;
	subtitle?: string;
	previewText?: string;
};

const BlogsPreviewCard = ({ post }: { post: Post }) => {
	return (
		<article
			key={post.slug}
			className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80"
		>
			<Image
				src={post.imageUrl}
				alt={post.title}
				className="-z-10 absolute inset-0 h-full w-full object-cover"
				width={2048}
				height={2048}
			/>
			<div className="-z-10 absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
			<div className="-z-10 absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />

			<div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-gray-300 text-sm leading-6">
				<time dateTime={post.datetime} className="mr-8">
					{post.date}
				</time>
				<div className="-ml-4 flex items-center gap-x-4">
					<svg
						viewBox="0 0 2 2"
						className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
					>
						<circle cx={1} cy={1} r={1} />
					</svg>
					<div className="flex gap-x-2.5">
						<Image
							src={post.author.imageUrl}
							alt={post.author.name}
							className="h-6 w-6 flex-none rounded-full bg-white/10"
							width={128}
							height={128}
						/>
						{post.author.name}
					</div>
				</div>
			</div>
			<h3 className="mt-3 font-semibold text-lg text-white leading-6">
				<Link href={getPostUrl(post)}>
					<span className="absolute inset-0" />
					{post.title}
				</Link>
			</h3>
		</article>
	);
};

const BlogsPreview = ({
	title = "From the blog",
	subtitle = "Learn how to grow your business with our expert advice.",
	posts,
	previewText = "Read more",
}: Props) => {
	return (
		<div className="py-24 sm:py-32">
			<div className="mx-auto flex max-w-7xl flex-col px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="font-bold text-3xl text-gray-900 tracking-tight sm:text-4xl">
						{title}
					</h2>
					<p className="mt-2 text-gray-600 text-lg leading-8">{subtitle}</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{posts.map((post) => (
						<BlogsPreviewCard key={post.slug} post={post} />
					))}
				</div>
			</div>
			<div className="mt-16 flex justify-center">
				<ActionButton name={previewText} href="/blog" icon="ArrowRight" />
			</div>
		</div>
	);
};

export default BlogsPreview;
