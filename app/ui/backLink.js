// // import from next
// import Link from "next/link";
// // import icons

// import { IoIosArrowBack } from "react-icons/io";

// export default function BackLink({ href, label }) {
//   return (
//     <Link href={href}>
//       <div className="ml-2 flex">
//         <IoIosArrowBack className="text-3xl "/>
//         <span className="text-xs mt-2 -ml-1 md:text-sm md:mt-1.5">{label}</span>
//       </div>
//     </Link>
//   );
// }

"use client";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { usePreviousRoute } from "../../context/previous-route-context";

export default function BackLink({ href, label }) {
  const previousRoute = usePreviousRoute();
  const backHref = href || previousRoute || "/";
  const backLabelPrefix = label || "Back To";
  let backLabelPage;
  if (previousRoute === "/blog") {
    backLabelPage = "Blog";
  } else if (previousRoute === "/our-work") {
    backLabelPage = "Our Work";
  } else if (previousRoute === "/") {
    backLabelPage = "Home Page";
  } else if (previousRoute === "/capabilities/video-production") {
    backLabelPage = "Video Production";
    } else if (previousRoute === "/capabilities/video-editing") {
    backLabelPage = "Video Editing";
  } else if (previousRoute === "/capabilities/photography") {
    backLabelPage = "Photography";
  } else if (previousRoute === "/capabilities/drone") {
    backLabelPage = "Drone";
  } else if (previousRoute === "/capabilities/live-streaming") {
    backLabelPage = "Live Streaming";
  } else if (previousRoute === "/capabilities/animation-motion-graphics") {
    backLabelPage = "Animation & Motion Graphics";
  } else {
    backLabelPage = "Previous Page";
  }
  const backLabel = `${backLabelPrefix} ${backLabelPage}`;

  return (
    <Link href={backHref}>
      <div className="ml-2 flex">
        <IoIosArrowBack className="text-3xl " />
        <span className="text-xs mt-2 -ml-1 md:text-sm md:mt-1.5">{backLabel}</span>
      </div>
    </Link>
  );
}