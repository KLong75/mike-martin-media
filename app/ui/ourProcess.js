// import components
import Image from "@/app/ui/image";

export default function OurProcess({ title, steps }) {
  return (
    <div className="flex flex-col items-center bg-[#F0F0F0]">
      <div className="p-6 lg:mt-6">
        <h3 className="lg:px-6 text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-semibold -mb-6 lg:-mb-10">
          {title}
        </h3>
        <Image
          src="/branding/line-logo-black.png"
          alt="Line Logo Black"
          width={1440}
          height={65}
          className="mt-2 lg:mb-6 lg:px-6"
        />
      </div>
      <div className="mb-4 lg:mx-32 flex grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col px-6 my-4 ">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold">
              0{index + 1}
            </span>
            <h4 className="sm:text-lg lg:text-xl xl:text-2xl font-semibold mt-2 whitespace-nowrap">
              {step.label}
            </h4>
            <p className="mt-2 lg:mt-4 text-sm lg:text-base 2xl:text-lg text-balance">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
