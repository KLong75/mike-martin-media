// "use client";
// // import from react
// import { useState } from "react";
// // import from next
// import Link from "next/link";
// import Image from "next/image";
// // import components
// import MMMLineLogo from "./mmmLineLogo";
// // import MMMLineLogoHeading from "../ui/mmmLineLogoHeading";
// import clsx from "clsx";
// // import from utils
// import { shortenPostText } from "@/utils/utils";

// export default function CaseStudyPreview({ caseStudy }) {
//   const [overlayOpen, setOverlayOpen] = useState(false);
//   return (
//     <>
//     <div
//         className="w-full p-6 max-w-md mx-auto"
//         onMouseEnter={() => setOverlayOpen(true)}
//         onMouseLeave={() => setOverlayOpen(false)}
//       >
//       {caseStudy ? (
//         <Link href={`/case-studies/study/${caseStudy.slug}`}>
//           <div className="p-2 bg-neutral-100 md:hover:bg-black md:hover:text-white transition-colors duration-1000 ease-in-out group shadow-2xl md:shadow-md md:hover:shadow-xl rounded-2xl md:rounded-none flex flex-col">
//             <div className="mx-auto mb-2">
//               <h3 className="text-center text-xl font-semibold my-1">
//                 {caseStudy.title}
//               </h3>
//               <h4>
//                 <span className="font-bold">Client:</span> {caseStudy.client}
//               </h4>
//               <h5>
//                 <span className="font-bold">Campaign:</span>{" "}
//                 {caseStudy.campaign}
//               </h5>
//               <h6>
//                 <span className="font-bold">Format:</span> {caseStudy.format}
//               </h6>
//             </div>
//              <div className="flex justify-center w-full h-auto px-4 relative">
//           <Image
//             className="shadow-xl"
//             src={caseStudy.preview_image.url}
//             width={caseStudy.preview_image.width}
//             height={caseStudy.preview_image.height}
//             alt={caseStudy.preview_image.alt}
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           />
//           {overlayOpen && (
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
//               {/* <p className="text-white text-xl">Case Study: {caseStudy.title}</p> */}
//             </div>
//           )}
//         </div>
//             <div className="p-4">
//               {Array.isArray(caseStudy.challenge) ? (
//                 <p>
//                   <span className="font-bold">The Challenge:</span>{" "}
//                   {shortenPostText(caseStudy.challenge[0], 240)}
//                 </p>
//               ) : (
//                 <p>
//                   <span className="font-span">The Challenge:</span>{" "}
//                   {shortenPostText(caseStudy.challenge, 240)}
//                 </p>
//               )}
//             </div>
//             <div className="px-4 group-hover:hidden">
//               <MMMLineLogo />
//             </div>
//             <div className="px-4 hidden group-hover:block">
//               <MMMLineLogo color={"white"} />
//             </div>

//             </div>
//         </Link>
//       ) : (
//         <p>Case study data is not available.</p>
//       )}
//     </div>
//     </>
//   );
// }

"use client";
// import from react
import { useState } from "react";
// import from next
import Link from "next/link";
import Image from "next/image";
// import components
import MMMLineLogo from "./mmmLineLogo";
// import MMMLineLogoHeading from "../ui/mmmLineLogoHeading";
// import images
import whiteMmmLogo from "../../public/branding/white-mmm-logo-294x95.png";
// import from utils
import { shortenPostText } from "@/utils/utils";

export default function CaseStudyPreview({ caseStudy }) {
  // CHANGED: overlayOpen removed, use group-hover for all hover effects
  return (
   
      <div className="w-full md:p-6 max-w-md mx-auto">
        {caseStudy ? (
          <Link href={`/case-studies/study/${caseStudy.slug}`}>
            {/* CHANGED: Use Tailwind's group class for unified hover effects */}
            <div className="p-2 bg-neutral-100 transition-colors duration-1000 ease-in-out group shadow-2xl md:shadow-md md:hover:shadow-xl rounded-2xl md:rounded-none flex flex-col justify-center md:hover:bg-black md:hover:text-white">
              <div className="mx-auto mb-2">
                <h3 className="text-center text-xl font-semibold my-1">
                  {caseStudy.title}
                </h3>
                <h4>
                  <span className="font-bold">Client:</span> {caseStudy.client}
                </h4>
                {caseStudy.brand_partner && (
                  <h4>
                    <span className="font-bold">Brand Partner:</span>{" "}
                    {caseStudy.brand_partner}
                  </h4>
                )}
                <h5>
                  <span className="font-bold">Campaign:</span>{" "}
                  {caseStudy.campaign}
                </h5>
                <h6>
                  <span className="font-bold">Format:</span> {caseStudy.format}
                </h6>
              </div>
              {/* CHANGED: Overlay is positioned relative to image, not container */}
              <div className="flex justify-center w-full px-4">
                <div className="relative">
                  <Image
                    className="shadow-xl"
                    src={caseStudy.preview_image.url}
                    width={caseStudy.preview_image.width}
                    height={caseStudy.preview_image.height}
                    alt={caseStudy.preview_image.alt}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* CHANGED: Overlay uses group-hover to match other hover effects */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-shadow-black">
                    <h4 className="text-white text-2xl font-courier-prime">
                      CASE STUDY:
                    </h4>
                    <h5 className="text-white text-lg">{caseStudy.client}</h5>
                    <div className="w-20 h-auto mt-2">
                      <Image src={whiteMmmLogo} alt="Mike Martin Media" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 pb">
                {Array.isArray(caseStudy.challenge) ? (
                  <p>
                    <span className="font-bold">The Challenge:</span>{" "}
                    {shortenPostText(caseStudy.challenge[0], 240)}
                  </p>
                ) : (
                  <p>
                    <span className="font-bold">The Challenge:</span>{" "}
                    {shortenPostText(caseStudy.challenge, 240)}
                  </p>
                )}
              </div>
              {/* CHANGED: Logo hover effect unified with group-hover */}
              <div className="px-4 mb-2 group-hover:hidden">
                <MMMLineLogo />
              </div>
              <div className="px-4 mb-2 hidden group-hover:block">
                <MMMLineLogo color={"white"} />
              </div>
            </div>
          </Link>
        ) : (
          <p>Case study data is not available.</p>
        )}
      </div>
   
  );
}
// CHANGES MARKED: overlayOpen removed, overlay moved to image container, hover effects unified with group-hover
