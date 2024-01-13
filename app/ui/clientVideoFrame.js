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

  return (
    <>
      <div className="flex justify-center items-center">
        <h3 className="text-sm font-bold">{client}</h3>
      </div>
      <div className="flex justify-center items-center -mb-8 sm:-mb-2 md:-mb-4 lg:-mb-2">
        <h4 className="text-sm font-bold">{category}</h4>
      </div>

      <div
        className="flex justify-center items-center "
        onClick={() => setVideoWindowOpen(true)}>
        <Image
          className="cursor-pointer"
          src={thumbnail_src}
          height={250}
          width={444}
          alt="video thumbnail"
        />
      </div>

      <Dialog open={videoWindowOpen} onClose={() => setVideoWindowOpen(false)}>
  <Dialog.Overlay className="fixed inset-0 bg-black opacity-90" />
  <Dialog.Panel className="fixed inset-0 z-10 overflow-auto">
    <div className="flex flex-col justify-center items-center h-full p-4">
      <div className="flex justify-end items-start w-full">
        <button
          onClick={() => setVideoWindowOpen(false)}
          className="absolute top-0 right-0 mt-4 mr-4">
          <HiX size={28} color="white" />
        </button>
      </div>
      <div className="w-full h-auto">
        <iframe
          src={src}
          client={client}
          category={category}
          allow="autoplay; fullscreen; picture-in-picture"
          className="w-full gallery-iframe-height"></iframe>
      </div>

      <div className="w-auto mt-4">
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


      <div className="flex justify-center items-center w-auto -mt-10 sm:-mt-8 md:-mt-4 lg:-mt-2">
        <Image
          src="/branding/mmm_line_logo.png"
          height={60}
          width={1140}
          alt="MMM logo"
        />
      </div>
    </>
  );
}
