// import from next
import Link from "next/link";
import Image from "next/image";
// import components
import BackLink from "@/app/ui/backLink";
import CaseStudyBannerHeading from "@/app/ui/caseStudyBannerHeading";
import CaseStudyDisplay from "@/app/ui/caseStudyDisplay";
import BannerImageGallery from "@/app/ui/bannerImageGallery";
import BannerImage from "@/app/ui/bannerImage";
// import data
import { caseStudies } from "@/app/lib/case-studies/case-studies";
import { siteUrl } from "@/app/lib/site-url";

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
      {/* <BannerImage
        src="/images/case-studies/wash-u/banner-images/d.png"
        alt="Mike Martin Media | Corporate Video Production"
        title="Corporate Video Production"
        width={1728}
        height={728}
      /> */}
      {/* <div className="mt-6 ml-2">
        <BackLink />
      </div> */}
      <BannerImageGallery images={caseStudyBannerImages} />

      <CaseStudyBannerHeading
        title="CASE STUDY"
        caseStudy={caseStudy}
        subtitle={caseStudy.client}
        heading={caseStudy.title}
        // text={caseStudy.challenge}
      />
       {/* <div className="mt-6 ml-2">
        <BackLink />
      </div> */}
      <div className="p-8 md:p-12">
        <CaseStudyDisplay caseStudy={caseStudy} />
      </div>
     
      {/* <div className="mb-6 ml-2">
        <BackLink />
      </div> */}
    </>
  );
}
