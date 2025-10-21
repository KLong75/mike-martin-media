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
      title: `Mike Martin Media Blog | Our Work: ${sample.title}`,
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

export default function WorkExamplePage({ params }) {
  const { slug } = params;
  const sample = workSampleData.find((sample) => sample.slug === slug);
  console.log("work sample:", sample);
  const isPhotography = sample?.category.includes("Photography");
  console.log("isPhotography:", isPhotography);

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
        <BackLink href="/our-work" label="Back to Our Work" />
      </div>
      {isPhotography && (
        <section className="">
          <h1 className="text-xl font-bold ">{sample.client}</h1>
          <h2>{sample.title}</h2>
        </section>
      )}
      {!isPhotography && (
        <section className="p-12 text-center">
          <h1 className="text-xl font-bold">{sample.client}</h1>
          <h2>{sample.title}</h2>
          <MuxVideoPlayer
            playbackId={sample.playback_id}
            title={sample.title}
            autoPlay={false}
            loop={false}
            muted={false}
          />
        </section>
      )}
    </>
  );
}
