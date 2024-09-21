"use client";
// import from vercel
import { track } from "@vercel/analytics";
// import from next
import Image from "next/image";
// import from react
import { useState } from "react";
// import from headlessui
import { Dialog } from "@headlessui/react";
// import icons
import { HiX } from "react-icons/hi";

export default function ClientVideoFrame({
  src,
  client,
  title,
  category,
  image_src,
}) {
  const [videoWindowOpen, setVideoWindowOpen] = useState(false);
  const [imageVisible, setImageVisible] = useState(true);

  const handleClick = () => {
    setImageVisible(false);
    setVideoWindowOpen(true);
    track("video view", { video: `${client} - ${title}` });
  };

  const handleDialogClose = () => {
    setImageVisible(true);
    setVideoWindowOpen(false);
  };

  return (
    <>
      <div
        className="relative flex justify-center items-center w-full h-auto cursor-pointer p-4 md:p-0 6xl:p-16 hover:transform md:hover:scale-105 hover:z-40 transition-transform duration-300 ease-in-out"
        onClick={handleClick}>
        <Image
          id="video-thumbnail"
          className={`z-0 cursor-pointer shadow-lg ${
            imageVisible ? "" : "hidden"
          }`}
          src={image_src}
          height={540}
          width={960}
          alt={`${client} ${title}`}
        />
        <span
          className={`z-40 absolute font-bold text-center text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-4xl 5xl:text-4xl ${
            imageVisible ? "" : "hidden"
          }`}
          style={{
            // textShadow: '2px 2px 0 black, -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black',
            textShadow: "2px 2px 0 black",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 1)",
            // color: "transparent",
            WebkitBackgroundClip: "text",
            MozBackgroundClip: "text",
          }}>
          {client}
        </span>
      </div>
      <Dialog open={videoWindowOpen} onClose={() => setVideoWindowOpen(false)}>
        <Dialog.Overlay className="fixed inset-0 bg-black" />
        <Dialog.Panel className="fixed inset-0 z-10 overflow-auto">
          <div className="flex flex-col justify-center items-center h-full p-4">
            <div className="flex justify-end items-start w-full">
              <button
                onClick={handleDialogClose}
                className="absolute top-0 right-0 mt-4 mr-4">
                <HiX size={28} color="white" />
              </button>
            </div>
            <div className="z-40 flex flex-col justify-center items-center w-full mt-24 md:mt-10">
              <Dialog.Title className="text-center text-2xl font-bold text-white">
                {client}
              </Dialog.Title>
              <Dialog.Description className="text-center text-2xl font-bold text-white mt-10">
                {title}
              </Dialog.Description>
            </div>
            <div className="w-full h-full flex justify-center items-center -mt-36 md:mt-0">
              <iframe
                src={src}
                client={client}
                category={category}
                allow="autoplay; fullscreen; picture-in-picture"
                className="w-full gallery-iframe-height z-40"></iframe>
            </div>
            <div className="z-40 flex flex-col justify-center items-center w-full "></div>
            <div className="w-auto ">
              <Image
                src="/branding/mmm_line_logo_white.png"
                height={60}
                width={1140}
                alt="MMM logo"
              />
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}

{/*   <div
        className="relative flex justify-center items-center w-full h-auto cursor-pointer p-4 md:p-0 6xl:p-16 hover:transform md:hover:scale-105 hover:z-40 transition-transform duration-300 ease-in-out"
        onClick={handleClick}>
        <Image
          id="video-thumbnail"
          className={`cursor-pointer shadow-lg ${imageVisible ? '' : 'hidden'}`}
          src={image_src}
          height={540}
          width={960}
          alt={`${client} ${title}`}
        />
        <span
          className={` absolute font-bold text-center text-xl lg:text-sm xl:text-lg 2xl:text-xl 3xl:text-3xl 4xl:text-4xl  5xl:text-5xl ${imageVisible ? '' : 'hidden'}` }
          style={{
            textShadow: '2px 2px 0 black',
            top: "33%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}>
          {client}
        </span>
        <span
          className={`absolute font-bold text-center text-xl lg:text-sm xl:text-lg 2xl:text-xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl ${imageVisible ? '' : 'hidden'}` }
          style={{
            textShadow: '2px 2px 0 black',
            top: "66%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}>
          {title}
        </span>
      </div> */}