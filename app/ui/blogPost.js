"use client";
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

// export default function BlogPost({
//   title,
//   image_src,
//   image_width,
//   image_height,
//   text,
//   post_date,
//   closing_tag,
//   author,
// }) {

//   const shortenPostText = (text, num) => {
//     if (text.length > num) {
//       return text.slice(0, num) + "...";
//     } else {
//       return text;
//     }
//   };

//   const [blogPostOpen, setBlogPostOpen] = useState(false);

//   const handleDialogClose = () => {
//     setBlogPostOpen(false);
//   }

//   return (
//     <>
//     <div className="flex flex-col items-center w-full h-auto mb-12 shadow-2xl relative">
//       <div id="image-div" className="w-52 h-52 sm:w-72 sm:h-72 mb-1">
//         <Image
//           className="shadow-xl mt-6"
//           priority
//           src={image_src}
//           width={image_width}
//           height={image_height}
//           alt={`Image for ${title} blog post`}
//         />
//       </div>
//       <div className="text-center w-72 hover:cursor-pointer" onClick={() => setBlogPostOpen(true)}>
//         <h2 className=" font-bold text-wrap">{title}</h2>
//         <span className="text-sm mt-2 text-center">
//           {formatDate(post_date)}
//         </span>

//         <p className="mb-6 text-pretty text-balance text-wrap text-left text-md mt-2 p-10 sm:p-0">
//           {shortenPostText(text[0], 200)}
//           <span className="inline-flex items-center font-bold text-yellow-800 hover:cursor-pointer"
//             onClick={() => setBlogPostOpen(true)}
//           >
//             READ MORE <IoIosArrowRoundForward className="text-2xl" />
//           </span>
//         </p>
//       </div>
//       <div className="absolute bottom-0">
//         <MMMLineLogoBlack />
//       </div>
//     </div>
//     <Dialog open={blogPostOpen} onClose={handleDialogClose}>
//       <Dialog.Overlay className="fixed inset-0 bg-black" />
//       <Dialog.Panel className="fixed inset-0 z-10 overflow-auto">
//         <div className="flex flex-col justify-center items-center h-full ">
//           <div className="flex justify-end items-start w-full mb-40">
//             <button
//               onClick={handleDialogClose}
//               className="absolute top-0 right-0 mt-4 mr-4">
//               <HiX className="text-4xl text-white" />
//             </button>
//           </div>
//           <div className="flex flex-col justify-center items-center w-full h-full mt-48 sm:mt-0">
//             <Dialog.Title className=" text-white text-3xl font-bold mt-96 sm:mt-0 md:mt-0 lg:mt-0">{title}</Dialog.Title>
//             <span className="text-white text-sm mb-6">
//               {formatDate(post_date)}
//             </span>
//             <div className="w-72 h-auto md:w-96 ">
//               <Image
//                 src={image_src}
//                 width={image_width}
//                 height={image_height}
//                 alt={`Image for ${title} blog post`}
//               />
//             </div>
//             <article className="text-white text-pretty text-balance text-wrap text-left p-8">
//               {text.map((paragraph, index) => (
//                 <p key={index} className="m-4">{paragraph}</p>
//               ))}
//               <p className="text-white m-4">{closing_tag}</p>
//               <p className="text-white m-4">- {author}</p>
//             </article>
//           </div>
//         </div>
//       </Dialog.Panel>
//     </Dialog>
//       </>
//   );
// }
export default function BlogPost({
  title,
  image_src,
  image_width,
  image_height,
  text,
  post_date,
  closing_tag,
  author,
}) {
  const shortenPostText = (text, num) => {
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
          {/* <h2 className="font-bold text-wrap">{title}</h2>
          <span className="text-sm mt-2">{formatDate(post_date)}</span> */}
          <p className="mb-6 text-pretty text-balance text-wrap text-left text-md mt-2">
            {shortenPostText(text[0], 200)}
            <span className="inline-flex items-center font-bold text-yellow-800 hover:cursor-pointer">
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
          <Dialog.Panel className="w-full max-w-3xl mx-auto my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
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

              <div className=" p-6 overflow-auto">
                {text.map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
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
            <MMMLineLogoBlack />
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
