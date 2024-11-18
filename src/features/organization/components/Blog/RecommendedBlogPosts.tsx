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

const BlogsOverviewCard = ({ post }: { post: Post }) => {
	return (
		<article
			key={post.slug}
			className="flex flex-col items-start justify-between"
		>
			<div className="relative w-full">
				<Image
					src={post.imageUrl}
					alt={post.title}
					className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
					width={2048}
					height={2048}
				/>
				<div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
			</div>
			<div className="max-w-xl">
				<div className="mt-8 flex items-center gap-x-4 text-xs">
					<time dateTime={post.datetime} className="text-gray-500">
						{post.date}
					</time>
				</div>
				<div className="group relative">
					<h3 className="mt-3 font-semibold text-gray-900 text-lg leading-6 group-hover:text-gray-600">
						<Link href={getPostUrl(post)}>
							<span className="absolute inset-0" />
							{post.title}
						</Link>
					</h3>
					<p className="mt-5 line-clamp-3 text-gray-600 text-sm leading-6">
						{post.description}
					</p>
				</div>
				<div className="relative mt-8 flex items-center gap-x-4">
					<Image
						src={post.author.imageUrl}
						alt={post.author.name}
						className="h-10 w-10 rounded-full bg-gray-100"
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
		</article>
	);
};

const RecommendedBlogs = ({ title = "Recommended for You", posts }: Props) => {
	return (
		<div className="py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="font-bold text-3xl text-gray-900 tracking-tight sm:text-4xl">
					{title}
				</h2>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{posts.map((post) => (
						<BlogsOverviewCard key={post.slug} post={post} />
					))}
				</div>
			</div>
		</div>
	);
};

export default RecommendedBlogs;
