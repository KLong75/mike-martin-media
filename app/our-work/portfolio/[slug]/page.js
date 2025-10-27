// import from next
import Image from "next/image";
// import components
import BackLink from "@/app/ui/backLink";
import PortfolioVideo from "@/app/ui/portfolioVideo";
import PortfolioPhotoGallery from "@/app/ui/portfolioPhotoGallery";
// import MuxBannerVideo from "@/app/ui/MuxBannerVideo";
// import from mux
// import MuxPlayer from "@mux/mux-player-react";
// import { createBlurUp } from "@mux/blurup";
// import data
import { workSampleData } from "@/app/lib/work-samples";
import { siteUrl } from "@/app/lib/site-url";
// import { track } from "@vercel/analytics/react";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const sample = workSampleData.find((sample) => sample.slug === slug);

  if (!sample) {
    return {
      title: "Sample not found",
      description: "",
    };
  }

  return {
    title: `${sample.client} - ${sample.title}`,
    description: sample.description,
    alternates: {
      canonical: `/${sample.slug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `${siteUrl}/blog/posts/${sample.slug}`,
      title: `Mike Martin Media | Our Work | ${sample.client} - ${sample.title}`,
      description: sample.description,
      // images: [
      //   {
      //     url: `${siteUrl}${sample.image_src}`,
      //     width: sample.image_width || 1200,
      //     height: sample.image_height || 630,
      //   },
      // ],
    },
    twitter: {
      cardType: "summary_large_image",
      title: `Mike Martin Media | Our Work | ${sample.client} - ${sample.title}`,
      description: sample.description,
      // images: [
      //   {
      //     url: `${siteUrl}${sample.image_src}`,
      //     width: sample.image_width || 1200,
      //     height: sample.image_height || 630,
      //   },
      //   // {
      //   //   url: ,
      //   //   width: 800,
      //   //   height: 418,
      //   // },
      // ],
    },
  };
}

export default async function PortfolioPage({ params }) {
  const { slug } = await params;
  const sample = workSampleData.find((sample) => sample.slug === slug);
  const client = sample?.client || "Unknown Client";
  const isPhotography = sample?.category.includes("Photography");
  // const categories = sample?.category || [];

  if (!sample) {
    return (
      <div className="container mx-auto px-4 py-8">
        <BackLink href="/our-work" label="Back to Our Work" />
        <h1 className="text-3xl font-bold mb-4">Sample Not Found</h1>
        <p>The entry you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <>
      <div className="mt-6 ml-2">
        <BackLink />
      </div>
      <div className="max-w-6xl 3xl:max-w-600 mx-auto">
        {isPhotography && (
          <div className="flex justify-center items-center w-full h-full mx-auto ">
            <PortfolioPhotoGallery client={client} />
          </div>
        )}
        {!isPhotography && (
          <div>
            <PortfolioVideo video={sample} />
          </div>
        )}
        <div className="flex justify-center px-6 md:px-12">
          <Image
            src="/branding/line-logo-black.png"
            alt=""
            width={1440}
            height={65}
            className="mb-12"
          />
        </div>
      </div>
    </>
  );
}