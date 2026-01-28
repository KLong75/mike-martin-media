// import from next
import Link from "next/link";
// import components
import BackLink from "@/app/ui/backLink";
import BlogPost from "@/app/ui/blogPost";
// import data
import { blogPosts } from "@/app/lib/blogPostData";
import { siteUrl } from "@/app/lib/site-url";
// import images
import goldenGateBridge from "../../../../public/images/blog-page/golden-gate-bridge.jpg";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((post) => post.slug === slug);
  
  if (!post) {
    return {
      title: "Post not found",
      description: "",
    };
  }
  
  return {
    title: `${post.title}`,
    description: post.description,
    alternates: {
      canonical: `/${post.slug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `${siteUrl}/blog/posts/${post.slug}`,
      title: `Mike Martin Media Blog | Beyond the Lens: ${post.title}`,
      description: post.description,
      images: [
        {
          url: `${siteUrl}${post.image_src}` || goldenGateBridge,
          width: post.image_width || 1200,
          height: post.image_height || 630,
        },
      ],
    },
    twitter: {
      cardType: "summary_large_image",
      title: `Mike Martin Media Blog | Beyond the Lens: ${post.title}`,
      description: post.description,
      images: [
        {
          url: `${siteUrl}${post.image_src}` || goldenGateBridge,
          width: post.image_width || 1200,
          height: post.image_height || 630,
        },
        // {
        //   url: ,
        //   width: 800,
        //   height: 418,
        // },
      ],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((post) => post.slug === slug);
  if (!post) return <p>Post not found</p>;

  const postSlug = post.slug;
  const postIndex = blogPosts.findIndex(
      (post) => post.slug === postSlug
    );
  const nextPost = blogPosts[postIndex + 1];
  const prevPost = blogPosts[postIndex - 1];
  const nextPostSlug = nextPost ? nextPost.slug : "";
  const prevPostSlug = prevPost ? prevPost.slug : "";
  const nextPostIndex = blogPosts.findIndex(
    (post) => post.slug === nextPostSlug
  );
  const prevPostIndex = blogPosts.findIndex(
    (post) => post.slug === prevPostSlug
  );
  
  return (
    <>
      <div className="mt-6 ml-2">
        {/* <BackLink href="/blog" label="Back to Blog" /> */}
        <BackLink />
      </div>
      <div>
        <BlogPost post={post} />
      </div>
       {/* <div className="mt-4 mb-12 lg:mb-36 flex justify-center">
        <div className="mr-52 sm:mr-72 md:mr-144">
          {prevPostIndex === -1 ? (
            <span className="text-gray-500">&lt;&lt; Prev</span>
          ) : (
            <Link href={`/blog/posts/${prevPostSlug}`} aria-label="previous blog post">
              <span className="font-semibold">&lt;&lt; Prev</span>
            </Link>
          )}
        </div>
        <div>
         {nextPostIndex === -1 ? (
            <span className="text-gray-500">Next &gt;&gt;</span>
          ) : (
            <Link href={`/blog/posts/${nextPostSlug}`} aria-label="next blog post">
              <span className="font-semibold">Next &gt;&gt;</span>
            </Link>
          )}
        </div>
      </div> */}
      <div className="mt-4 mb-12 lg:mb-36 flex justify-center">
        <div className="mr-52 sm:mr-72 md:mr-144">
          {prevPost ? (
            <Link href={`/blog/posts/${prevPost.slug}`} aria-label={`Previous blog post: ${prevPost.title}`}>
              <span className="font-semibold">&lt;&lt; Previous</span>
            </Link>
          ) : (
            <span className="text-gray-500">&lt;&lt; Previous</span>
          )}
        </div>
        <div>
          {nextPost ? (
            <Link href={`/blog/posts/${nextPost.slug}`} aria-label={`Next blog post: ${nextPost.title}`}>
              <span className="font-semibold">Next &gt;&gt;</span>
            </Link>
          ) : (
            <span className="text-gray-500">Next &gt;&gt;</span>
          )}
        </div>
      </div>
    </>
  );
}