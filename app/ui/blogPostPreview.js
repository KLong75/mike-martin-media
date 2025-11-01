"use client";
// import from react
import React from "react";
// import from next
import Link from "next/link";
// import components
import Image from "next/image";
// import from utils
// import { formatDate } from "../lib/utils";

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
    <div className="p-6 md:hover:bg-black md:hover:text-white transition-colors duration-1000 ease-in-out group shadow-2xl md:shadow-none rounded-2xl md:rounded-none">
      <Link href={`blog/posts/${slug}`}>
        <div className="w-full">
          <div className="flex justify-center w-full h-auto">
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
            {/* {formatDate(post_date)} */}
            {post_date}
            <span className="border-t border-black w-6 mx-2 group-hover:border-white"></span>
          </p>
          <h3 className="font-bold text-2xl text-wrap my-1">{title}</h3>
          <p className="mb-6 text-left text-md mt-2 lg:mt-4">
            {Array.isArray(text) && text.length > 0
              ? shortenPostText(text[0], 200)
              : "No content available"}
          </p>
          <p className="font-semibold text-center md:hidden">Read More</p>
        </div>
      </Link>
    </div>
  );
}

// "use client";
// // import from react
// import React from "react";
// import { useState, useEffect } from "react";
// // import from next
// import Link from "next/link";
// // import components
// import Image from "next/image";
// // import from utils
// import { formatDate } from "../lib/utils";

// // Custom hook to detect screen size using media queries
// const useIsMobile = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const mediaQuery = window.matchMedia("(max-width: 640px)");
//       const handleChange = () => setIsMobile(mediaQuery.matches);

//       // Set initial value
//       handleChange();

//       // Add event listener for changes
//       mediaQuery.addEventListener("change", handleChange);

//       // Cleanup event listener on unmount
//       return () => mediaQuery.removeEventListener("change", handleChange);
//     }
//   }, []);

//   return isMobile;
// };

// export default function BlogPostPreview({
//   slug,
//   title,
//   image_src,
//   image_width,
//   image_height,
//   image_alt,
//   text,
//   post_date,
//   priority,
// }) {
//   // const [isMobile, setIsMobile] = useState(false);
//   const isMobile = useIsMobile();

//   // useEffect(() => {
//   //   if (typeof window !== "undefined") {
//   //     const checkSize = () => {
//   //       setIsMobile(window.innerWidth < 640);
//   //     };
//   //     checkSize();
//   //     window.addEventListener("resize", checkSize);
//   //     return () => window.removeEventListener("resize", checkSize);
//   //   }
//   // }, []);

//   const shortenPostText = (text, num) => {
//     if (text.length < num) {
//       return text + "..";
//     }
//     if (text.length > num) {
//       return text.slice(0, num) + "...";
//     } else {
//       return text;
//     }
//   };

//   return (
//     <div className="p-6 md:hover:bg-black md:hover:text-white transition-colors duration-500 group shadow-2xl md:shadow-none rounded-2xl md:rounded-none">
//       <Link href={`blog/posts/${slug}`}>
//         <div className="w-full">
//           <div className="flex justify-center w-full">
//             <Image
//               className="shadow-xl mt-6"
//               src={image_src}
//               width={image_width}
//               height={image_height}
//               alt={image_alt}
//               priority={priority}
//             />
//           </div>
//         </div>
//         <div className="max-w-[460px] pt-6">
//           <p className="flex items-center">
//             {formatDate(post_date)}
//             <span className="border-t border-black w-6 mx-2 group-hover:border-white"></span>
//           </p>
//           <h3 className="font-bold text-2xl text-wrap my-1">{title}</h3>
//           <p className="mb-6 text-left text-md mt-2 lg:mt-4">
//             {shortenPostText(text[0], 200)}
//           </p>
//           {isMobile && (
//             <p className="font-semibold text-center">
//               Read More
//             </p>
//           )}
//         </div>
//       </Link>
//     </div>
//   );
// }
