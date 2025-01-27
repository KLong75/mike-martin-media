// import components
import Image from "@/app/ui/image";

export default function OurProcess({ title, steps }) {
  return (
    <div className="flex flex-col items-center bg-[#F0F0F0]">
      <div className="lg:mt-24">
        <h3 className="lg:px-6 text-xl xl:text-2xl 2xl:text-4xl font-semibold lg:-mb-10">
          {title}
        </h3>
        <Image
          src="/branding/line-logo-black.png"
          alt="Line Logo Black"
          width={1440}
          height={65}
          className=""
        />
      </div>
      <div className="-mt-6 p-2 lg:m-16 lg:mx-36 flex grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col px-6">
            <div className=" ">
              <span className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold">0{index + 1}</span>
            </div>
            <h4 className="text-lg lg:text-xl font-semibold mt-2">{step.name}</h4>
            <p className="mt-4 lg:text-lg ">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
