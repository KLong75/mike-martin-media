// import from next
import Image from "next/image";


export default function Page() {
  return (
    <div className="flex justify-center items-center mt-12 mb-6">
        <div className="flex justify-center items-center w-24 h-8 mb-1">
          <Image
            src="/branding/mmm_black.png"
            width={294}
            height={95}
            alt="company logo"
            priority
            as="image"
          />
        </div>
        <h2 className="text-4xl font-bold ml-1">Photography</h2>
      </div>
  );
}