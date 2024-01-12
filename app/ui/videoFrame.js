export default function VideoFrame({ src, client, category }) {
  return (
    <iframe
      src={src}
      client={client}
      category={category}
      allow="autoplay; fullscreen; picture-in-picture"
      className="w-full h-52  sm:w-full sm:h-80 md:w-full md:h-128 lg:w-full lg:h-144"
      >
    </iframe>
  );
}
