"use client";
//import from react
import { useState, useRef } from "react";
//import from next
import { usePathname } from "next/navigation";
// import Link from 'next/link';
// import data
import { blogPosts } from "../lib/blogPostData";
// import components
import BlogPostPreview from "./blogPostPreview";

export default function BlogPostGallery({ number_of_posts }) {
  const currentPath = usePathname();
  const totalPosts = blogPosts.length;
  const totalPages = Math.ceil(totalPosts / number_of_posts);
  const [currentPage, setCurrentPage] = useState(1);
  const galleryRef = useRef(null);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const startIndex = (currentPage - 1) * number_of_posts;
  const endIndex = startIndex + number_of_posts;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  return (
    <div className="flex justify-center p-6">
      <div className="grid grid-cols-1 max-w-800" ref={galleryRef}>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {currentPosts.map((post, index) => (
            <BlogPostPreview
              key={index}
              slug={post.slug}
              title={post.title}
              image_src={post.image_src}
              image_width={post.image_width}
              image_height={post.image_height}
              image_alt={post.image_alt}
              second_image_src={post.second_image_src}
              second_image_width={post.second_image_width}
              second_image_height={post.second_image_height}
              second_image_alt={post.second_image_alt}
              text={post.text}
              post_date={post.post_date}
              closing_tag={post.closing_tag}
              author={post.author}
              video_src={post.video_src}
              priority={index === 0} // Set priority for the first blog post
              className="justify-center"
            />
          ))}
        </div>
        {currentPath === "/blog" && (
          <div className="flex justify-center items-center p-4">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={`btn mx-4 text-lg ${
                  currentPage === i + 1
                    ? "w-10 h-10 rounded-full bg-black text-white"
                    : ""
                }`}
                onClick={() => handlePageChange(i + 1)}>
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
