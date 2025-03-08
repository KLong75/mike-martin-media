// import components
import BackLink from "@/app/ui/backLink";
import BlogPost from "@/app/ui/blogPost";

export const metadata = {
  title: "15 Years of Growth and Gratitude",
  description: "Tom reflects on 15 years with MMM",
  alternates: {
    canonical: "/growth-and-gratitude",
  },
};

export default function BlogPostPage() {
  return (
    <>
      <div className="mt-6 ml-2">
        <BackLink href="/blog" label="Back to Blog" />
      </div>
      <div>
        <BlogPost />
      </div>
    </>
  );
}
