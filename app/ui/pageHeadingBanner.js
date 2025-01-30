export default function PageHeadingBanner({ title, heading, text }) {
  return (
    <div className="bg-black text-white flex justify-center">
      <div className="bg-black text-white w-full h-auto flex grid grid-cols-1 md:grid-cols-2 max-w-800 my-5">
        <div className="flex flex-col justify-center my-4 px-12 lg:ml-28 xl:ml-36 ">
          <h1 className="text-xs sm:text-sm  font-semibold">
            {title.toUpperCase()}
          </h1>
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl 3xl:text-6xl font-semibold">
            {heading}
          </h2>
        </div>
        <div className="flex flex-col justify-center md:my-4 mb-6 lg:mb-0 px-12 lg:mr-28 xl:mr-36 ">
          <p className="lg:py-10 text-sm xl:text-base 3xl:text-lg">{text}</p>
        </div>
      </div>
    </div>
  );
}
