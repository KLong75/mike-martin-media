// import components
// import Image from "@/app/ui/image";
import MMMLineLogoHeading from "@/app/ui/mmmLineLogoHeading";

export default function OurProcess({ title, steps }) {
  const numOfSteps = steps.length;
  
  return (
    <div className="flex flex-col items-center bg-[#F0F0F0]">
      <div>
        <div className="lg:px-6 2xl:px-0">
          <MMMLineLogoHeading headline={title} heading_level={"h3"} />
        </div>
        <div className={`px-2 mx-2 2xl:mx-28 flex grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${numOfSteps}`}>
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col px-6 my-4 ">
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold">
                0{index + 1}
              </span>
              <h4 className="sm:text-lg lg:text-xl xl:text-2xl font-semibold mt-2 ">
                {step.label}
              </h4>
              <p className="mt-2 lg:mt-4 text-sm lg:text-base 2xl:text-lg text-balance">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
