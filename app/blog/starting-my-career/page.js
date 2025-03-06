// import data
import { blogPosts } from "../../lib/blogPostData";
// import components
import BackLink from "@/app/ui/backButton";
import BlogPost from "@/app/ui/blogPost";

export default function BlogPostPage() {
  const post = blogPosts.find((post) => post.slug === "starting-my-career");

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
    </main>
  );
}