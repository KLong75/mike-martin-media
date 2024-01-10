export default function VideoFrame({ src, title }) {
  return (
    <iframe
      src={src}
      allow="autoplay; fullscreen; picture-in-picture"
      title={title}
      className="">
    </iframe>
  );
}
