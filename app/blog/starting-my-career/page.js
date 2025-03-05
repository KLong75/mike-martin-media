// import from react
import React from "react";
// import { useRouter } from 'next/navigation';
import { blogPosts } from "../../lib/blogPostData";
// import components
import Image from "../../ui/image";
import MMMLineLogoBlack from "../../ui/mmmLineLogoBlack";
import BackLink from "@/app/ui/backButton";
import { formatDate } from "../../lib/utils";

export default function BlogPostPage() {
  const post = blogPosts.find((post) => post.post_date === "1/1/25");

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <main className="flex-1">
      {/* <div className="w-full max-w-3xl mx-auto my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl border-2 md:border-4 border-black"> */}
      <div className="p-6">
        <BackLink href="/blog" label="Back to Blog" />
      </div>

      <div className="flex flex-col items-center p-12 mt-12">
        <h1 className="text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900">
          {post.title}
        </h1>
        <span className="text-lg mt-2 md:mt-4">
          {formatDate(post.post_date)}
        </span>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center items-center">
          <div className="">
            <Image
              src={post.image_src}
              width={post.image_width}
              height={post.image_height}
              alt={post.image_alt}
              className="w-180"
            />
          </div>
        </div>
        <div className="p-12 overflow-auto">
          {post.text.map((paragraph, index) => (
            <React.Fragment key={index}>
              <p className="mb-4">{paragraph}</p>
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
            </React.Fragment>
          ))}
          <p className="mb-4">{post.closing_tag}</p>
          <p className="-mb-4">- {post.author}</p>
        </div>
      </div>
      {post.video_src && (
        <iframe
          src={post.video_src}
          allow="autoplay; fullscreen; picture-in-picture"
          className="w-full h-80 p-4 lg:my-4"></iframe>
      )}
      <div className="mb-4">
        <MMMLineLogoBlack />
      </div>
      {/* </div> */}
    </main>
  );
}
