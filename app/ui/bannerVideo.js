// import from next
import Head from "next/head";

export default function BannerVideo({ src, title }) {
  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href="https://player.vimeo.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://i.vimeocdn.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://f.vimeocdn.com"
          crossOrigin="anonymous"
        />
      </Head>
      <section className="grid grid-cols-1 gap-4">
        <div className="relative flex justify-center">
          <div
            className="w-full banner-video-aspect-ratio-container"
            style={{
              paddingTop:
                title === "MMM Livestreaming Video"
                  ? "42.2%"
                  : title === "MMM Photography Slide Show"
                  ? "42.2%"
                  : "56.25%",
            }}>
            <iframe
              title={title}
              src={src}
              allow="autoplay; fullscreen; picture-in-picture"
              className="absolute top-0 left-0 w-full h-full"></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
