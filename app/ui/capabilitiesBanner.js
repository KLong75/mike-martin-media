export default function CapabilitiesBanner({ title, heading, text }) {
  return (
    <div className="bg-black text-white w-full h-auto flex grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-center mt-4 lg:mb-4 lg:mb-0 px-12 lg:ml-28">
        <h1 className="text-sm">{title}</h1>
        <h2 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl">{heading}</h2>
      </div>
      <div className="flex flex-col justify-center my-4 mb-6 lg:mb-0 px-12 lg:mr-28">
        <p className="lg:py-16 2xl:text-lg">{text}</p>
      </div>
    </div>
  );
}
