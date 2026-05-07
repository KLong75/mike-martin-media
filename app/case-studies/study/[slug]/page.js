// import from next
import Link from "next/link";
// import Image from "next/image";
// import components
import BackLink from "@/app/ui/backLink";
import CaseStudyBannerHeading from "@/app/ui/caseStudyBannerHeading";
import CaseStudyDisplay from "@/app/ui/caseStudyDisplay";
import BannerImageGallery from "@/app/ui/bannerImageGallery";
import BannerImage from "@/app/ui/bannerImage";
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
  // const caseStudyImages = caseStudy.images;
  // const caseStudyLandscapeImages = caseStudyImages.filter(
  //   (image) => image.orientation === "landscape",
  // );
  // const caseStudyPortraitImages = caseStudyImages.filter(
  //   (image) => image.orientation === "portrait",
  // );
  const caseStudyBannerImages = caseStudy.banner_images;
  const nextCaseStudyIndex =
    caseStudies.findIndex((study) => study.slug === slug) + 1;
  const nextCaseStudy = caseStudies[nextCaseStudyIndex % caseStudies.length];
  const nextCaseStudySlug = nextCaseStudy.slug;
  const previousCaseStudyIndex =
    caseStudies.findIndex((study) => study.slug === slug) - 1;
  const previousCaseStudy =
    caseStudies[
      (previousCaseStudyIndex + caseStudies.length) % caseStudies.length
    ];
  const previousCaseStudySlug = previousCaseStudy.slug;

  if (!caseStudy) {
    return (
      <div>
        <h1>Case Study Not Found</h1>
        <p>The case study you are looking for does not exist.</p>
        <BackLink href="/case-studies" />
      </div>
    );
  }
  return (
    <>
      <BannerImageGallery images={caseStudyBannerImages} />
      <CaseStudyBannerHeading
        title="CASE STUDY"
        caseStudy={caseStudy}
        subtitle={caseStudy.client}
        heading={caseStudy.title}
      />
      {/* <div className="mt-6 ml-2">
        <BackLink />
      </div> */}
      <div className="p-8 md:p-12 md:pb-0">
        <CaseStudyDisplay caseStudy={caseStudy} />
      </div>

      <div className="relative w-full py-6 flex items-center justify-center font-semibold max-w-6xl mx-auto">
        <Link
          href={`/case-studies/study/${previousCaseStudySlug}`}
          className="absolute left-0"
          >
          <div className="ml-2 flex items-center">
            <IoIosArrowBack className="text-3xl " />
            <span className="text-xs -ml-1 md:text-sm ">
              Previous<span className="hidden md:inline-block">: {previousCaseStudy.client}</span>
            </span>
          </div>
        </Link>
        <Link href={`/case-studies/study/${nextCaseStudySlug}`}
          className="absolute right-0"
        >
          <div className="flex items-center">
             <span className="text-xs -mr-1 md:text-sm">
              Next<span className="hidden md:inline-block">: {nextCaseStudy.client}</span>
            </span>
            <IoIosArrowForward className="text-3xl " />
          </div>
        </Link>
      </div>

      <div className="flex justify-center items-center pt-6 pb-12">
        <Link href="/case-studies" className="underline font-semibold">
          Case Studies
        </Link>
      </div>
    </>
  );
}
