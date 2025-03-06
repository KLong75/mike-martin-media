"use client";
// import from react
import React from "react";
// import from next
import Link from "next/link";
// import from react
// import { useState } from "react";
// import components
import Image from "./image";
// import MMMLineLogoBlack from "./mmmLineLogoBlack";
// import icons
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { HiX } from "react-icons/hi";
// import from utils
import { formatDate } from "../lib/utils";
// import from headlessui
// import {
//   Dialog,
//   DialogPanel,
//   DialogBackdrop,
//   DialogTitle,
// } from "@headlessui/react";

export default function BlogPostPreview({
  slug,
  title,
  image_src,
  image_width,
  image_height,
  image_alt,
  // second_image_src,
  // second_image_width,
  // second_image_height,
  // second_image_alt,
  text,
  post_date,
  // closing_tag,
  // author,
  // video_src,
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

  // const [blogPostOpen, setBlogPostOpen] = useState(false);

  // const handleDialogClose = () => {
  //   setBlogPostOpen(false);
  // };

  return (
    <div className="p-6 hover:bg-black hover:text-white transition-colors duration-500">
      <Link href={`blog/${slug}`}>
        <div className="w-full ">
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
            <span className="border-t border-black w-6 mx-2"></span>
          </p>
          <p className="font-bold text-2xl text-wrap my-1">{title}</p>
          <p className="mb-6 text-left text-md mt-2 lg:mt-4">
            {shortenPostText(text[0], 200)}
            {/* <br />
              <span
                className="inline-flex items-center font-bold hover:cursor-pointer hover:scale-105 transition-transform mt-1"
                onClick={() => setBlogPostOpen(true)}
                tabIndex={0}>
                READ MORE <IoIosArrowRoundForward className="text-2xl" />
              </span> */}
          </p>
        </div>
      </Link>
    </div>
  );
}