export default function VideoFrame({ src, title }) {
  return (
    <iframe
      src={src}
      allow="autoplay; fullscreen; picture-in-picture"
      title={title}
      className="w-full h-52  sm:w-full sm:h-80 md:w-full md:h-128 lg:w-full lg:h-144"
      >
    </iframe>
  );
}
