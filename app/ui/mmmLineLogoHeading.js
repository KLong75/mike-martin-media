// import components
import Image from "./image";

export default function MMMLineLogoHeading({ headline }) {
  return (
    <div className="flex flex-col items-center">
    <div className="p-6 lg:p-0">
      <h3 className="lg:px-6 text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-semibold -mb-6 lg:-mb-10 w-3/4">
        {headline}
      </h3>
      <div className="xl:-mt-12 w-full">
        <Image
          src="/branding/line-logo-black.png"
          alt="Line Logo Black"
          width={1440}
          height={65}
          className="mt-2 lg:mb-6 lg:px-6"
        />
      </div>
    </div>
    </div>
  );
}
