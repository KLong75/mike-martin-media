"use client";
// import from react
import React from "react";
// import from next
import Link from "next/link";
// import components
import Image from "./image";
// import from utils
import { formatDate } from "../lib/utils";

export default function BlogPostPreview({
  slug,
  title,
  image_src,
  image_width,
  image_height,
  image_alt,
  text,
  post_date,
  priority,
}) {
  const shortenPostText = (text, num) => {
    if (text.length < num) {
      return text + "..";
    }
    if (text.length > num) {
      return text.slice(0, num) + "...";
    } else {
      return text;
    }
  };

  return (
    <div className="p-6 hover:bg-black hover:text-white transition-colors duration-500 group">
      <Link href={`blog/blog-posts/${slug}`}>
        <div className="w-full">
          <div className="flex justify-center w-full">
            <Image
              className="shadow-xl mt-6"
              src={image_src}
              width={image_width}
              height={image_height}
              alt={image_alt}
              priority={priority}
            />
          </div>
        </div>
        <div className="max-w-[460px] pt-6">
          <p className="flex items-center">
            {formatDate(post_date)}
            <span className="border-t border-black w-6 mx-2 group-hover:border-white"></span>
          </p>
          <p className="font-bold text-2xl text-wrap my-1">{title}</p>
          <p className="mb-6 text-left text-md mt-2 lg:mt-4">
            {shortenPostText(text[0], 200)}
          </p>
        </div>
      </Link>
    </div>
  );
}