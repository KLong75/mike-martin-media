import MMMLineLogoBlack from "./mmmLineLogoBlack";

export default function WeTextBlock({ headline, text }) {
  return (
    <div className="flex flex-col justify-center items-center h-full p-6 lg:-mb-0">
      <div className="flex flex-col justify-between h-full shadow-2xl p-4">
        <div >
          <span className="font-bold mr-auto p-4">{headline}</span>
          <p className="text-left w-full p-4">
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



