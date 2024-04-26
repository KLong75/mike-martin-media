export default function BannerVideo({ src, title }) {
  return (
    <section className="grid grid-cols-1 gap-4">
      <div className="relative flex justify-center">
        <div
          className="w-full banner-video-aspect-ratio-container"
          style={{
            paddingTop:
              title === "MMM_Livestreaming_Video" ||
              title === "Video_Page_Banner_Video"
                ? "42.19%"
                : title === "MMM_Photography_Video"
                ? "42.19%"
                : "56.25%"
          }}>
          <iframe
            title={title}
            src={src}
            allow="autoplay; fullscreen; picture-in-picture"
            className="absolute top-0 left-0 w-full h-full"></iframe>
        </div>
      </div>
    </section>
  );
}
