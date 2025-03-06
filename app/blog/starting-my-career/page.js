// import components
import BackLink from "@/app/ui/backLink";
import BlogPost from "@/app/ui/blogPost";

export default function BlogPostPage() {

  return (
    <main>
      <div className="mt-6 ml-2">
        <BackLink href="/blog" label="Back to Blog" />
      </div>
      <div>
        <BlogPost />
      </div>
    </main>
  );
}
