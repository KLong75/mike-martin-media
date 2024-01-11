export default function VideoFrame({ src, title }) {
  return (
    <iframe
      src={src}
      allow="autoplay; fullscreen; picture-in-picture"
      title={title}
       className="w-full h-56  md:w-full md:h-96 lg:w-full lg:h-144"
      >
    </iframe>
  );
}
