"use client";
// import from utils
import { formatDate } from "../lib/utils";
// import from next
// import { usePathname } from "next/navigation";
import Link from "next/link";
// import components
import Image from "./image";
// import data
// import { blogPosts } from "../lib/blogPostData";

export default function BlogPost({post}) {
  // const currentPath = usePathname();
  // const postSlug = currentPath.split("/").pop();
  // const post = blogPosts.find((post) => post.slug === postSlug);
  // const postIndex = blogPosts.findIndex(
  //   (post) => post.slug === postSlug
  // );
  // console.log(postIndex);
  // const nextPost = blogPosts[postIndex + 1];
  // const prevPost = blogPosts[postIndex - 1];
  // const nextPostSlug = nextPost ? nextPost.slug : "";
  // const prevPostSlug = prevPost ? prevPost.slug : "";

  if (!post) {
    return <p>Post not found</p>;
  }
  return (
    <>
      <div className="flex flex-col items-center p-12 ">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 text-center">
          {post.title}
        </h1>
        <h2 className="text-sm lg:text-lg mt-2 md:mt-4">
          {formatDate(post.post_date)}
        </h2>
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
      {/* <div className="mt-4 mb-12 lg:mb-36 flex justify-center">
        <div className="mr-52 sm:mr-72 md:mr-144">
          <Link href={`/blog/blog-posts/${prevPostSlug}`}>
            <span>&lt;&lt; Prev</span>
          </Link>
        </div>
        <div>
          <Link href={`/blog/blog-posts/${nextPostSlug}`}>
            <span>Next &gt;&gt;</span>
          </Link>
        </div>
      </div> */}
    </>
  );
}
