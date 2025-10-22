// import from next
import Link from "next/link";
import Image from "next/image";
// import components
import BackLink from "@/app/ui/backLink";
// import MuxVideoPlayer from "@/app/ui/muxVideoPlayer";
// import from mux
import MuxPlayer from "@mux/mux-player-react";
import { createBlurUp } from "@mux/blurup";
// import data
import { workSampleData } from "@/app/lib/work-samples";
import { siteUrl } from "@/app/lib/site-url";
import { track } from "@vercel/analytics/react";

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

export default async function WorkExamplePage({ params }) {
  const { slug } = params;
  const sample = workSampleData.find((sample) => sample.slug === slug);
  console.log("work sample:", sample);
  const isPhotography = sample?.category.includes("Photography");
  // console.log("isPhotography:", isPhotography);
  const categories = sample?.category || [];
  console.log("categories:", categories);
  const options = {};
  const muxPlaybackId = sample?.playback_id || "";
  console.log("muxPlaybackId:", muxPlaybackId);
  const { blurDataURL, aspectRatio } = await createBlurUp(
    muxPlaybackId,
    options
  );
  console.log("blurDataURL:", blurDataURL, "aspectRatio:", aspectRatio);

  const handleError = (e) => {
    console.error("Mux Player Error:", e);
  };

  const handleVideoPlaying = () => {
    track("Video started", { video: title });
    console.log(`Video started: ${title}, ${now}`);
  };

  const handleVideoEnded = () => {
    track("Full video play", { video: title });
    console.log(`Full video play tracked for: ${sample.title}`);
  };

  const handleTimeUpdate = (event) => {
    const currentTime = event.target.currentTime;
    const duration = event.target.duration;
    const halfwayPoint = duration / 2;
    if (
      !event.target.halfwayTracked &&
      currentTime >= halfwayPoint
    ) {
      event.target.halfwayTracked = true;
      track("Halfway video play", { video: sample.title });
      console.log(`Halfway video play tracked for: ${sample.title}`);
    }
  };

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
        {/* <BackLink href="/our-work" label="Back to Our Work" /> */}
        <BackLink />
      </div>
      {isPhotography && (
        <section className="">
          <h1 className="text-xl font-bold">{sample.client}</h1>
          <h2>{sample.title}</h2>
        </section>
      )}
      {!isPhotography && (
        <section className="text-center max-w-6xl 3xl:max-w-600 mx-auto w-full  p-6 md:p-12">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold mb-6">
            {sample.client}
          </h1>
          {/* <h2>{sample.title}</h2> */}
          {/* <MuxPlayer
            accentColor="#000"
            playbackId={sample.playback_id}
            // placeholder={blurDataURL}
            title={sample.title}
            autoPlay={false}
            loop={false}
            muted={true}
            // poster="https://image.mux.com/R0000d7JrkYTLaFA6ulhx001SZLeNtO88JdHeCNWIHNmlA/thumbnail.png?width=1200&height=678&time=1.75"
            poster={sample.image_src}
            disableCookies={true}
            metadata={{
              video_id: sample.playback_id,
              video_title: sample.title,
              // viewer_user_id: "user-id-bc-789",
            }}
          /> */}
          <div
            className="mx-auto  w-full"
            style={{ aspectRatio: aspectRatio }} // or aspect-[1200/678] with Tailwind 3.2+
          >
            <MuxPlayer
              accentColor="#000"
              playbackId={sample.playback_id}
              // placeholder={blurDataURL}
              title={sample.title}
              autoPlay={false}
              loop={false}
              muted={true}
              poster={sample.image_src}
              disableCookies={true}
              metadata={{
                video_id: sample.playback_id,
                video_title: sample.title,
              }}
              // onError={handleError}
              // onPlaying={handleVideoPlaying}
              // onEnded={handleVideoEnded}
              // onTimeUpdate={handleTimeUpdate}
              style={{ width: "100%", height: "100%" }}
            />
            <div className="flex justify-center">
              <Image
                src="/branding/line-logo-black.png"
                alt=""
                width={1440}
                height={65}
                className="mt-2 lg:mt-6 lg:mb-6"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
