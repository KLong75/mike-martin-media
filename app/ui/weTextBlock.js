import MMMLineLogoBlack from "./mmmLineLogoBlack";

export default function WeTextBlock({ headline, text }) {
  return (
    <div className="flex flex-col justify-center items-center h-full p-6 lg:-mb-0">
      <div className="flex flex-col justify-between h-full shadow-2xl p-4">
        <div >
          <span className="text-lg lg:text-xl xl:text-2xl 3xl:text-4xl font-bold mr-auto p-4">{headline}</span>
          <p className=" xl:text-xl 3xl:text-2xl text-left w-full p-4">
            {text}
          </p>
        </div>
        <div>
          <MMMLineLogoBlack />
        </div>
      </div>
    </div>
  );
}



