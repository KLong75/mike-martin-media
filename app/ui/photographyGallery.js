"use client";
// import from react
import { useState } from "react";
// import from next
import Image from "next/image";
// import from headlessui
import { Dialog } from "@headlessui/react";
// import icons
import { HiX } from "react-icons/hi";
// import data
import { photographyWorkSampleData } from "@/app/lib/data";

export default function PhotographyGallery({
  client,
  thumbnail_src,
  width,
  height,
  images,
}) {
  const [photoGalleryOpen, setPhotoGalleryOpen] = useState(false);

  const handleCoverImageClick = () => {
    setPhotoGalleryOpen(true);
  };

  const handleCloseButtonClicked = () => {
    setPhotoGalleryOpen(false);
  };

  return (
    <>
      <div
        className="text-white relative justify-center items-center w-full h-auto p-6 hover:cursor-pointer hover:transform hover:scale-110 hover:z-40 hover:text-black transition-transform"
        onClick={handleCoverImageClick}>
        <Image
          id="gallery-cover-image"
          client={client}
          src={thumbnail_src}
          alt={client}
          width={width}
          height={height}
        />
        <h3 className=" text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl lg:text-4xl font-bold  ">
          {client}
        </h3>
      </div>
      <Dialog
        open={photoGalleryOpen}
        onClose={() => setPhotoGalleryOpen(false)}>
        <Dialog.Overlay className="fixed inset-0 bg-black z-50" />
        <Dialog.Panel className="fixed inset-0 z-10 overflow-auto z-50">
          <div className="flex flex-col justify-center items-center h-full p-4">
            <div className="flex justify-end items-start w-full">
              <button
                onClick={handleCloseButtonClicked}
                className="text-white hover:text-gray-300 transition-colors">
                <HiX className="h-6 w-6" />
              </button>
            </div>
            <div className="z-40 flex flex-col justify-center items-center ">
              <Dialog.Title className="text-center text-2xl font-bold text-white">
                {client}
              </Dialog.Title>
            </div>
            <div className="flex justify-center items-center w-full h-full">
              <div className="flex justify-center items-center w-full h-full">
                <Image
                  src={photographyWorkSampleData[2].images[0].src}
                  alt={client}
                  width={width}
                  height={height}
                />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
