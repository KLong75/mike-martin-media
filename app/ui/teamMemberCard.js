"use client";
// import from react
import { useState } from "react";
// import components
import Image from "next/image";
// import icons
import { HiX } from "react-icons/hi";
// import from headless ui
import {
  Dialog,
  DialogPanel,
  DialogBackdrop,
  DialogTitle,
} from "@headlessui/react";

export default function TeamMemberCard({ name, role, about, image_src }) {
  const [bioOpen, setBioOpen] = useState(false);
  const handleTeamCardClick = () => {
    setBioOpen(true);
  };
  const handleClose = () => {
    setBioOpen(false);
  };

  return (
    <>
      <div
        tabIndex={0}
        role="button"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleTeamCardClick();
          }
        }}
        className="relative w-full h-full overflow-hidden cursor-pointer shadow-2xl group"
        onClick={handleTeamCardClick}>
        <Image
          className="shadow-2xl w-full h-auto object-cover transform transition-transform duration-2000 lg:group-hover:scale-110 ease-in-out"
          src={image_src}
          alt={`Tap or click to learn more about ${name} and their role at MMM.`}
          width={900}
          height={1200}
        />
        <div className="absolute bottom-0 left-0 w-full h-1/8 z-50 bg-black bg-opacity-50 flex flex-col justify-center text-white p-4 lg:group-hover:bg-opacity-100 transition-bg duration-2000 ease-in-out">
          <p className="font-semibold text-xl text-shadow-black-background-black text-left">
            {name}
          </p>
          <p className="font-semibold text-xs uppercase text-shadow-black-background-black text-left">
            {role}
          </p>
        </div>
      </div>
      <Dialog open={bioOpen} onClose={handleClose}>
        <DialogBackdrop style={{ backgroundColor: "rgba(0,0,0,0.6)" }} className="fixed inset-0 bg-black/60" />
        <DialogPanel className="fixed inset-0 flex justify-center items-center z-50">
          <div className="relative bg-black text-white p-6 max-w-2xl w-[90vw] lg:w-3/4 h-auto">
            <div className="flex justify-end">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4"
                aria-label="Close dialog">
                <HiX className="text-2xl" />
              </button>
            </div>
            <div className="flex flex-col items-start md:p-6">
              <DialogTitle className="text-2xl font-semibold">
                {name}
              </DialogTitle>
              <h3 className="text-xs uppercase font-semibold">{role}</h3>
              <p className="text-lg mt-6">{about}</p>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}
