// import { useRouter } from 'next/navigation';
import { blogPosts } from "../../lib/blogPostData";
// import components
import Image from "../../ui/image";
// import MMMLineLogoBlack from "../../ui/mmmLineLogoBlack";
import BackLink from "@/app/ui/backButton";
import { formatDate } from "../../lib/utils";
import Link from "next/link";

export default function BlogPostPage() {
  const post = blogPosts.find((post) => post.post_date === "1/1/25");

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <main>
      <div className="mt-6 ml-2">
        <BackLink href="/blog" label="Back to Blog" />
      </div>
      <div className="flex flex-col items-center p-12 ">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900">
          {post.title}
        </h1>
        <h2 className="text-lg mt-2 md:mt-4">{formatDate(post.post_date)}</h2>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center items-center px-12">
          <Image
            src={post.image_src}
            width={post.image_width}
            height={post.image_height}
            alt={post.image_alt}
            className="w-175"
          />
        </div>
        <div className="p-8 max-w-3xl mx-auto lg:text-lg lg:mt-6">
          {post.text.map((paragraph, index) => (
            <div key={index}>
              <p className="mb-4 max-w-180">{paragraph}</p>
              {index === 0 && post.second_image_src && (
                <div className="flex justify-center items-center">
                  <div className="w-64 h-64 p-6">
                    <Image
                      src={post.second_image_src}
                      width={post.second_image_width}
                      height={post.second_image_height}
                      alt={post.second_image_alt}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
          <p className="mb-4">{post.closing_tag}</p>
          <p className="-mb-4">- {post.author}</p>
        </div>
        {post.video_src && (
          <iframe
            src={post.video_src}
            allow="autoplay; fullscreen; picture-in-picture"
            className="w-full h-80 p-4 lg:my-4"></iframe>
        )}
      </div>
      <div className="max-w-3xl mx-auto flex justify-center px-6">
        <Image
          src="/branding/line-logo-black.png"
          alt=""
          width={1440}
          height={65}
          className="mt-2 lg:mt-6 lg:mb-6"
        />
      </div>
      <div className="mt-2 mb-12 lg:mb-36 flex justify-center">
        <div className="mr-52">
          <Link href="/blog">
            <span>&lt;&lt; Prev</span>
          </Link>
        </div>
        <div>
          <Link href="/blog">
            <span>Next &gt;&gt;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}