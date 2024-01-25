import MMMLineLogoBlack from "./mmmLineLogoBlack";

export default function WeTextBlock({ headline, text }) {
  return (
    <div className="flex flex-col justify-center items-center h-full p-12 -mb-12 -mb-0">
      <div className="flex flex-col justify-between h-full shadow-2xl">
        <div>
          <h4 className="font-bold mr-auto p-4 -mb-4">{headline}</h4>
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



