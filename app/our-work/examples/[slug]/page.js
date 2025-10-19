// import from next
import Link from "next/link";
// import components
import BackLink from "@/app/ui/backLink";
import MuxVideoPlayer from "@/app/ui/muxVideoPlayer";
// import data
import { workSampleData } from "@/app/lib/work-samples";
import { siteUrl } from "@/app/lib/site-url";

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
    title: `${sample.title}`,
    description: sample.description,
    alternates: {
      canonical: `/${sample.slug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `${siteUrl}/blog/posts/${sample.slug}`,
      title: `Mike Martin Media Blog | Our Work: ${sample.title}`,
      description: sample.description,
      images: [
        {
          url: `${siteUrl}${sample.image_src}`,
          width: video.image_width || 1200,
          height: video.image_height || 630,
        },
      ],
    },
    twitter: {
      cardType: "summary_large_image",
      title: `Mike Martin Media Blog | Our Work: ${sample.title}`,
      description: sample.description,
      images: [
        {
          url: `${siteUrl}${sample.image_src}`,
          width: sample.image_width || 1200,
          height: sample.image_height || 630,
        },
        // {
        //   url: ,
        //   width: 800,
        //   height: 418,
        // },
      ],
    },
  };
}
