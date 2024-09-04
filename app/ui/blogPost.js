"use client";
// import from react
import React from "react";
// import from next
import Image from "next/image";
// import from react
import { useState } from "react";
// import components
import MMMLineLogoBlack from "../ui/mmmLineLogoBlack";
// import icons
import { IoIosArrowRoundForward } from "react-icons/io";
import { HiX } from "react-icons/hi";
// import from utils
import { formatDate } from "../lib/utils";
// import from headlessui
import { Dialog } from "@headlessui/react";

export default function BlogPost({
  title,
  image_src,
  image_width,
  image_height,
  second_image_src,
  second_image_width,
  second_image_height,
  second_image_alt,
  text,
  post_date,
  closing_tag,
  author,
  video_src,
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

  const [blogPostOpen, setBlogPostOpen] = useState(false);

  const handleDialogClose = () => {
    setBlogPostOpen(false);
  };

  return (
    <>
      {/* Trigger and Preview Section */}
      <div
        className="flex flex-col items-center w-full h-auto mb-12 shadow-2xl relative"
        onClick={() => setBlogPostOpen(true)}>
        <div className="text-center w-72 hover:cursor-pointer mt-3 -mb-4">
          <h2 className="font-bold text-wrap">{title}</h2>
          <span className="text-sm mt-2">{formatDate(post_date)}</span>
        </div>
        <div id="image-div" className="w-72 h-72 -mb-2">
          <Image
            className="shadow-xl mt-6"
            priority
            src={image_src}
            width={image_width}
            height={image_height}
            alt={`Image for ${title} blog post`}
          />
        </div>
        <div className="text-center w-72 hover:cursor-pointer mb-4">
          <p className="mb-6 text-balance text-left text-md mt-2">
            {shortenPostText(text[0], 200)}
            <br />
            <span className="inline-flex items-center font-bold hover:cursor-pointer hover:scale-105 transition-transform mt-1">
              READ MORE <IoIosArrowRoundForward className="text-2xl" />
            </span>
          </p>
          <div className="absolute bottom-0 left-0 right-0">
            <MMMLineLogoBlack />
          </div>
        </div>
      </div>
      {/* Dialog Section */}
      <Dialog
        open={blogPostOpen}
        onClose={handleDialogClose}
        className="fixed inset-0 z-50 overflow-y-auto">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-75" />
        <div className="min-h-screen px-4 text-center">
          <Dialog.Panel className="w-full max-w-3xl mx-auto my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl border-2 md:border-4 border-black">
            <div className="flex flex-col items-center p-4 mt-8 ">
              <Dialog.Title className="text-lg font-medium text-gray-900">
                {title}
              </Dialog.Title>
              <span className="text-sm mt-2">{formatDate(post_date)}</span>
            </div>
            <div className="-mt-8 mb-4 md:hidden">
              <MMMLineLogoBlack />
            </div>
            <div className="flex flex-col ">
              <div className="flex justify-center items-center">
                <div className="md:w-128 p-4 -mt-4 -mb-4">
                  <Image
                    src={image_src}
                    width={image_width}
                    height={image_height}
                    alt={`Image for ${title} blog post`}
                  />
                </div>
              </div>
              <div className="p-6 overflow-auto">
                {text.map((paragraph, index) => (
                  <React.Fragment key={index}>
                    <p className="mb-4">{paragraph}</p>
                    {index === 0 && second_image_src && (
                      <div className="flex justify-center items-center">
                        <div className="w-64 h-64 p-6">
                          <Image
                            src={second_image_src}
                            width={second_image_width}
                            height={second_image_height}
                            alt={second_image_alt}
                          />
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
                <p className="mb-4">{closing_tag}</p>
                <p className="-mb-4">- {author}</p>
              </div>
            </div>
            {/* Close Button Positioned Absolutely at Top Right */}
            <div className="absolute top-0 right-0 mt-4 mr-4">
              <button
                onClick={handleDialogClose}
                className="rounded-md  hover:text-gray-500 focus:outline-none">
                <HiX className="h-6 w-6" />
              </button>
            </div>
            {video_src && (
              <iframe
                src={video_src}
                allow="autoplay; fullscreen; picture-in-picture"
                className="w-full h-80 p-4 lg:my-4"></iframe>
            )}
            <div className="mb-4">
              <MMMLineLogoBlack />
            </div>
            <div className="flex justify-center items-center mb-2">
              <button
                onClick={handleDialogClose}
                className="rounded-md  hover:text-gray-500 focus:outline-none">
                <HiX className="h-6 w-6" />
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
