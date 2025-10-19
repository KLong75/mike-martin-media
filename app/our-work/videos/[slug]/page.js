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
  const video = workSampleData.find((video) => video.slug === slug);

  if (!video) {
    return {
      title: "Video not found",
      description: "",
    };
  }
  
  return {
    title: `${video.title}`,
    description: video.description,
    alternates: {
      canonical: `/${video.slug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `${siteUrl}/blog/posts/${video.slug}`,
      title: `Mike Martin Media Blog | Our Work: ${video.title}`,
      description: video.description,
      images: [
        {
          url: `${siteUrl}${video.image_src}`,
          width: video.image_width || 1200,
          height: video.image_height || 630,
        },
      ],
    },
    twitter: {
      cardType: "summary_large_image",
      title: `Mike Martin Media Blog | Our Work: ${video.title}`,
      description: video.description,
      images: [
        {
          url: `${siteUrl}${video.image_src}`,
          width: video.image_width || 1200,
          height: video.image_height || 630,
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
