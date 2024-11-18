import BlogInfo from "./BlogInfo";
/* -----------------Components--------------- */
import BlogPostList from "./BlogPostList";
import BlogPostPreview from "./BlogPostPreview";
import FeaturedBlogPost from "./FeaturedBlogPost";
import RecommendedBlogPosts from "./RecommendedBlogPosts";

type Props = {
	children?: React.ReactNode;
	className?: string;
};

const Blog = ({ children, className }: Props) => {
	return (
		<section id="posts" className={className}>
			{children}
		</section>
	);
};

Blog.Featured = FeaturedBlogPost;
Blog.Recommended = RecommendedBlogPosts;
Blog.List = BlogPostList;
Blog.Preview = BlogPostPreview;
Blog.Info = BlogInfo;

export { Blog };
