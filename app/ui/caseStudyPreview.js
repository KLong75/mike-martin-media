// import from next
import Link from "next/link";
import Image from "next/image";
// import components
import MMMLineLogo from "./mmmLineLogo";
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
            {/* Use Tailwind's group class for unified hover effects */}
            <div className="p-2 bg-neutral-100 transition-colors duration-1000 ease-in-out group shadow-2xl md:shadow-md md:hover:shadow-xl flex flex-col justify-center md:hover:bg-black md:hover:text-white relative">
              <div className="mx-auto mb-2">
                <h3 className="text-center text-xl font-semibold my-1">
                  {caseStudy.short_title}
                </h3>
                <h4>
                  <span className="font-semibold">Client:</span> {caseStudy.client}
                </h4>
                {/* {caseStudy.brand_partner && (
                  <h4>
                    <span className="font-semibold">Brand Partner:</span>{" "}
                    {caseStudy.brand_partner}
                  </h4>
                )} */}
                <h5>
                  <span className="font-semibold">Campaign:</span>{" "}
                  {caseStudy.short_campaign}
                </h5>
                <h6>
                  <span className="font-semibold">Format:</span> {caseStudy.short_format}
                </h6>
              </div>
              {/* Overlay is positioned relative to image, not container */}
              <div className="flex justify-center w-full px-4">
                <div className="">
                  <Image
                    className="shadow-xl"
                    src={caseStudy.preview_image.url}
                    width={caseStudy.preview_image.width}
                    height={caseStudy.preview_image.height}
                    alt={caseStudy.preview_image.alt}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="eager"
                  />
                  {/* Overlay uses group-hover to match other hover effects */}
                  <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-shadow-black">
                    <span className="text-white text-2xl font-courier-prime">
                      CASE STUDY:
                    </span>
                    {/* <h3 className="text-white text-lg">{caseStudy.title}</h3> */}
                    <h4 className="text-white text-xl">
                      {caseStudy.client}
                    </h4>
                      {/* {caseStudy.brand_partner && (
                        <h4 className="text-white text-md">
                          <span className="font-semibold">Brand Partner:</span>{" "}
                          {caseStudy.brand_partner}
                        </h4>
                      )}
                    <h5 className="text-white text-md mt-2">
                      <span className="font-semibold">Campaign:</span>{" "}
                      {caseStudy.campaign}
                    </h5>
                    <h6 className="text-white text-md">
                      <span className="font-semibold">Format:</span> {caseStudy.format}
                    </h6> */}
                    <div className="w-20 h-auto mt-2">
                      <Image src={whiteMmmLogo} alt="Mike Martin Media" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 pb">
                {Array.isArray(caseStudy.challenge) ? (
                  <p>
                    <span className="font-semibold">The Challenge:</span>{" "}
                    {shortenPostText(caseStudy.challenge[0], 240)}
                  </p>
                ) : (
                  <p>
                    <span className="font-semibold">The Challenge:</span>{" "}
                    {shortenPostText(caseStudy.challenge, 240)}
                  </p>
                )}
              </div>
              {/* Logo hover effect unified with group-hover */}
              <div className="px-4 -mt-4 mb-2 group-hover:hidden">
                <MMMLineLogo />
              </div>
              <div className="px-4 -mt-4 mb-2 hidden group-hover:block">
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