// import from next
import Link from "next/link";
// import data
import { blogPosts } from "../../lib/blogPostData";
// import components
import BackLink from "@/app/ui/backLink";
import BlogPost from "@/app/ui/blogPost";
import PageHeadingBanner from "@/app/ui/pageHeadingBanner";

export default function BlogPostPage() {
  const post = blogPosts.find((post) => post.slug === "year-end-review");
  const postIndex = blogPosts.findIndex(
    (post) => post.slug === "year-end-review"
  );
  const nextPost = blogPosts[postIndex + 1];
  const prevPost = blogPosts[postIndex - 1];
  const nextPostSlug = nextPost ? nextPost.slug : "";
  const prevPostSlug = prevPost ? prevPost.slug : "";

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <main>
      <div className="mt-6 ml-2">
        <BackLink href="/blog" label="Back to Blog" />
      </div>
      <div>
        <BlogPost post={post} />
      </div>
      <div className="mt-2 mb-12 lg:mb-36 flex justify-center">
        <div className="mr-52">
          <Link href={`/blog/${prevPostSlug}`}>
            <span>&lt;&lt; Prev</span>
          </Link>
        </div>
        <div>
          <Link href={`/blog/${nextPostSlug}`}>
            <span>Next &gt;&gt;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
