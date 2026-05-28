// // import from next
// import Link from "next/link";
// // import Image from "next/image";
// // import components
// import BackLink from "@/app/ui/backLink";
// import CaseStudyBannerHeading from "@/app/ui/caseStudyBannerHeading";
// import CaseStudyDisplay from "@/app/ui/caseStudyDisplay";
// import BannerImageGallery from "@/app/ui/bannerImageGallery";
// // import BannerImage from "@/app/ui/bannerImage";
// // import data
// import { caseStudies } from "@/app/lib/case-studies/case-studies";
// import { siteUrl } from "@/app/lib/site-url";
// // import from react-icons
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// export async function generateMetadata({ params }) {
//   const { slug } = await params;
//   const caseStudy = caseStudies.find((study) => study.slug === slug);
//   if (!caseStudy) {
//     return {
//       title: "Case Study Not Found",
//       description: "",
//     };
//   }
//   return {
//     title: `${caseStudy.client} | ${caseStudy.title} | Mike Martin Media Case Study`,
//     description: caseStudy.long_term_partnership,
//     alternates: {
//       canonical: `/case-studies/study/${caseStudy.slug}`,
//     },
//     openGraph: {
//       type: "website",
//       locale: "en_US",
//       url: `${siteUrl}/case-studies/study/${caseStudy.slug}`,
//       title: `${caseStudy.client} | ${caseStudy.title} | Mike Martin Media Case Study`,
//       description: caseStudy.long_term_partnership,
//       images: [
//         {
//           url: caseStudy.preview_image.url,
//           width: caseStudy.preview_image.width,
//           height: caseStudy.preview_image.height,
//         },
//       ],
//     },
//     twitter: {
//       cardType: "summary_large_image",
//       title: `${caseStudy.client} | ${caseStudy.title} | Mike Martin Media Case Study`,
//       description: caseStudy.long_term_partnership,
//       images: [
//         {
//           url: caseStudy.preview_image.url,
//           width: caseStudy.preview_image.width,
//           height: caseStudy.preview_image.height,
//         },
//       ],
//     },
//   };
// }

// export default async function CaseStudyPage({ params }) {
//   const { slug } = await params;
//   const caseStudy = caseStudies.find((study) => study.slug === slug);
//   const caseStudyBannerImages = caseStudy.banner_images;
//   const nextCaseStudyIndex =
//     caseStudies.findIndex((study) => study.slug === slug) + 1;
//   const nextCaseStudy = caseStudies[nextCaseStudyIndex % caseStudies.length];
//   const nextCaseStudySlug = nextCaseStudy.slug;
//   const previousCaseStudyIndex =
//     caseStudies.findIndex((study) => study.slug === slug) - 1;
//   const previousCaseStudy =
//     caseStudies[
//       (previousCaseStudyIndex + caseStudies.length) % caseStudies.length
//     ];
//   const previousCaseStudySlug = previousCaseStudy.slug;

//   if (!caseStudy) {
//     return (
//       <div>
//         <h1>Case Study Not Found</h1>
//         <p>The case study you are looking for does not exist.</p>
//         <BackLink href="/case-studies" />
//       </div>
//     );
//   }
//   return (
//     <>
//       <BannerImageGallery images={caseStudyBannerImages} />
//       <CaseStudyBannerHeading
//         title="CASE STUDY"
//         caseStudy={caseStudy}
//         subtitle={caseStudy.client}
//         heading={caseStudy.title}
//       />
//       <div className="md:mt-6 ml-2 hidden md:block">
//         <BackLink href="/case-studies" label="Back to Case Studies" />
//       </div>
//       <div className="p-8 md:p-12 md:pb-0">
//         <CaseStudyDisplay caseStudy={caseStudy} />
//       </div>

//       <div className="relative w-full py-12 flex items-center justify-center font-semibold max-w-6xl mx-auto">
//         <Link
//           href={`/case-studies/study/${previousCaseStudySlug}`}
//           className="absolute left-0">
//           <div className="ml-2 flex items-center">
//             <IoIosArrowBack className="text-3xl " />
//             <span className="text-xs -ml-1 md:text-sm ">
//               Previous
//               <span className="hidden md:inline-block">
//                 : {previousCaseStudy.client}
//               </span>
//             </span>
//           </div>
//         </Link>
//         <Link
//           href={`/case-studies/study/${nextCaseStudySlug}`}
//           className="absolute right-0">
//           <div className="flex items-center">
//             <span className="text-xs -mr-1 md:text-sm">
//               Next
//               <span className="hidden md:inline-block">
//                 : {nextCaseStudy.client}
//               </span>
//             </span>
//             <IoIosArrowForward className="text-3xl " />
//           </div>
//         </Link>
//       </div>

//       <div className="flex justify-center items-center py-12">
//         <Link href="/case-studies">
//           <div
//             className={`border-2 border-black text-black hover:transform hover:bg-black hover:text-white transition-transform font-semibold rounded-full flex justify-center items-center cursor-pointer w-32 lg:w-36 py-1 lg:px-2`}>
//             <span className="lg:text-lg">Case Studies</span>
//           </div>
//         </Link>
//       </div>
//     </>
//   );
// }



// import from next
import Link from "next/link";
// import Image from "next/image";
// import components
import BackLink from "@/app/ui/backLink";
import CaseStudyBannerHeading from "@/app/ui/caseStudyBannerHeading";
import CaseStudyDisplay from "@/app/ui/caseStudyDisplay";
import BannerImageGallery from "@/app/ui/bannerImageGallery";
// import BannerImage from "@/app/ui/bannerImage";
// import data
import { caseStudies } from "@/app/lib/case-studies/case-studies";
import { siteUrl } from "@/app/lib/site-url";
// import from react-icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((study) => study.slug === slug);
  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
      description: "",
    };
  }
  return {
    title: `${caseStudy.client} | ${caseStudy.title} | Mike Martin Media Case Study`,
    description: caseStudy.long_term_partnership,
    alternates: {
      canonical: `/case-studies/study/${caseStudy.slug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `${siteUrl}/case-studies/study/${caseStudy.slug}`,
      title: `${caseStudy.client} | ${caseStudy.title} | Mike Martin Media Case Study`,
      description: caseStudy.long_term_partnership,
      images: [
        {
          url: caseStudy.preview_image.url,
          width: caseStudy.preview_image.width,
          height: caseStudy.preview_image.height,
        },
      ],
    },
    twitter: {
      cardType: "summary_large_image",
      title: `${caseStudy.client} | ${caseStudy.title} | Mike Martin Media Case Study`,
      description: caseStudy.long_term_partnership,
      images: [
        {
          url: caseStudy.preview_image.url,
          width: caseStudy.preview_image.width,
          height: caseStudy.preview_image.height,
        },
      ],
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((study) => study.slug === slug);

  if (!caseStudy) {
    return (
      <div>
        <h1>Case Study Not Found</h1>
        <p>The case study you are looking for does not exist.</p>
        <BackLink href="/case-studies" />
      </div>
    );
  }

  const caseStudyBannerImages = caseStudy.banner_images;

  // Stop looping: only allow in-bounds previous/next
  const caseStudyIndex = caseStudies.findIndex((study) => study.slug === slug);
  const hasPreviousCaseStudy = caseStudyIndex > 0;
  const hasNextCaseStudy = caseStudyIndex < caseStudies.length - 1;

  const previousCaseStudy = hasPreviousCaseStudy
    ? caseStudies[caseStudyIndex - 1]
    : null;
  const nextCaseStudy = hasNextCaseStudy
    ? caseStudies[caseStudyIndex + 1]
    : null;

  return (
    <>
      <BannerImageGallery images={caseStudyBannerImages} />
      <CaseStudyBannerHeading
        title="CASE STUDY"
        caseStudy={caseStudy}
        subtitle={caseStudy.client}
        heading={caseStudy.title}
      />
      <div className="md:mt-6 ml-2 hidden md:block">
        <BackLink href="/case-studies" label="Back to Case Studies" />
      </div>
      <div className="p-8 md:p-12 md:pb-0">
        <CaseStudyDisplay caseStudy={caseStudy} />
      </div>

      <div className="relative w-full py-12 flex items-center justify-center font-semibold max-w-6xl mx-auto">
        {hasPreviousCaseStudy ? (
          <Link
            href={`/case-studies/study/${previousCaseStudy.slug}`}
            className="absolute left-0">
            <div className="ml-2 flex items-center">
              <IoIosArrowBack className="text-3xl" />
              <span className="text-xs -ml-1 md:text-sm">
                Previous
                <span className="hidden md:inline-block">
                  : {previousCaseStudy.client}
                </span>
              </span>
            </div>
          </Link>
        ) : (
          <div
            aria-disabled="true"
            className="absolute left-0 ml-2 flex items-center text-gray-400 cursor-not-allowed select-none">
            <IoIosArrowBack className="text-3xl" />
            <span className="text-xs -ml-1 md:text-sm">Previous Case Study</span>
          </div>
        )}

        {hasNextCaseStudy ? (
          <Link
            href={`/case-studies/study/${nextCaseStudy.slug}`}
            className="absolute right-0">
            <div className="flex items-center">
              <span className="text-xs -mr-1 md:text-sm">
                Next
                <span className="hidden md:inline-block">
                  : {nextCaseStudy.client}
                </span>
              </span>
              <IoIosArrowForward className="text-3xl" />
            </div>
          </Link>
        ) : (
          <div
            aria-disabled="true"
            className="absolute right-0 mr-2 flex items-center text-gray-400 cursor-not-allowed select-none">
            <span className="text-xs -mr-1 md:text-sm">Next Case Study</span>
            <IoIosArrowForward className="text-3xl" />
          </div>
        )}
      </div>

      <div className="flex justify-center items-center py-12">
        <Link href="/case-studies">
          <div
            className={`border-2 border-black text-black hover:transform hover:bg-black hover:text-white transition-transform font-semibold rounded-full flex justify-center items-center cursor-pointer w-32 lg:w-36 py-1 lg:px-2`}>
            <span className="lg:text-lg">Case Studies</span>
          </div>
        </Link>
      </div>
    </>
  );
}