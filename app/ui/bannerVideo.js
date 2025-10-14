export default function BannerVideo({ src, title }) {
  const paddingClass =
    title === "MMM_Livestreaming_Video" ||
    title === "Video_Page_Banner_Video" ||
    title === "MMM_Our_Work_Video" ||
    title === "MMM_Photography_Video"
      ? "padding-top-42-19"
      : "padding-56-25";

  return (
    <section className="grid grid-cols-1 gap-4">
      <div className="relative flex justify-center">
        <div
          className={`w-full banner-video-aspect-ratio-container ${paddingClass}`}>
          <iframe
            loading="lazy"
            title={title}
            src={src}
            allow="autoplay"
            className="absolute top-0 left-0 w-full h-full"></iframe>
        </div>
      </div>
    </section>
  );
}
