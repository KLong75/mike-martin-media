"use client";
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
  category,
  thumbnail_src,
}) {
  const [videoWindowOpen, setVideoWindowOpen] = useState(false);
  const [imageVisible, setImageVisible] = useState(true);

  const handleClick = () => {
    setImageVisible(false);
    setVideoWindowOpen(true);
  }

  const handleDialogClose = () => {
    setImageVisible(true);
    setVideoWindowOpen(false);
  }

  return (
    <>
      <div
        className="relative flex justify-center items-center w-full h-auto cursor-pointer p-4 md:p-0"
        onClick={handleClick}>
        <Image
          id="video-thumbnail"
          className={`cursor-pointer shadow-lg ${imageVisible ? '' : 'hidden'}`}
          src={thumbnail_src}
          height={540}
          width={960}
          alt="video thumbnail"
        />
        <span
          className={`absolute font-bold text-center text-xl ${imageVisible ? '' : 'hidden'}`}
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
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
              <Dialog.Title className="text-center text-2xl font-bold text-white">{client}</Dialog.Title>
            </div>
             <div className="w-full h-full flex justify-center items-center -mt-36 md:mt-0">
              <iframe
                src={src}
                client={client}
                category={category}
                allow="autoplay; fullscreen; picture-in-picture"
                className="w-full gallery-iframe-height z-40"></iframe>
            </div>
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
