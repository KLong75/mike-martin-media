// import components
import Image from "@/app/ui/image";

export default function OurProcess({ title, steps }) {
  return (
    <div className="flex flex-col items-center bg-[#F0F0F0]">
      <div className="p-6 lg:mt-6">
        <h3 className="lg:px-6 text-xl xl:text-2xl 2xl:text-4xl font-semibold lg:-mb-10">
          {title}
        </h3>
        <Image
          src="/branding/line-logo-black.png"
          alt="Line Logo Black"
          width={1440}
          height={65}
          className="lg:mb-6 lg:px-6"
        />
      </div>
      <div className="mb-4 -mt-6 p-2 lg:m-16 lg:mx-36 flex grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col px-6 my-4">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold">
              0{index + 1}
            </span>
            <h4 className="sm:text-lg lg:text-lg xl:text-xl font-semibold mt-2">
              {step.name}
            </h4>
            <p className="mt-2 lg:mt-4 text-sm lg:text-base 2xl:text-lg ">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
