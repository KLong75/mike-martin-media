"use client";
// import from vercel
// import { track } from "@vercel/analytics";
// import from next
import Link from "next/link";
// import from react
// import { useState } from "react";
// import from headlessui
// import {
//   Dialog,
//   DialogPanel,
//   DialogBackdrop,
//   DialogTitle,
// } from "@headlessui/react";
// import icons
// import { HiX } from "react-icons/hi";
// import components
import Image from "next/image";

export default function ClientVideoFrame({
  // src,
  client,
  title,
  category,
  image_src,
  slug,
}) {
  return (
    <>
      <Link href={`/our-work/portfolio/${slug}`}>
        <div className="relative flex justify-center items-center w-full h-full overflow-hidden group cursor-pointer">
          <Image
            className={`w-full h-full object-cover transform transition-transform duration-2000 group-hover:scale-125 ease-in-out `}
            src={image_src}
            height={540}
            width={960}
            alt={`${client} ${title}`}
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-[#484848] opacity-45 group-hover:opacity-75 group-hover:bg-black transition-bg duration-2000 ease-in-out"></div>
          <div
            className="lg:opacity-0 group-hover:opacity-100 duration-2000 ease-in-out"
            id="client-and-category-div">
            <span
              className={`video-frame-client-span absolute font-bold text-left text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-4xl  5xl:text-4xl`}>
              {client}
            </span>
            <span className="video-frame-category-span text-left absolute text-xs lg:text-sm font-bold">
              {Array.isArray(category) ? category.join(", ") : category || ""}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}