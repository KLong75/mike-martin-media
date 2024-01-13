// import from next
import Image from "next/image";


export default function MmmGood() {
  return (
    <div className="flex justify-center items-center">
    {/* <h2 className="text-4xl font-bold mr-4">About</h2> */}
    <div className="flex justify-center items-center w-24 h-8 mb-1">
      <Image
        src="/branding/mmm_black.png"
        width={294}
        height={95}
        alt="company logo"
      />
    </div>
    <div className="flex justify-center items-center w-24 h-8 ml-2 mb-1">
      <Image
        src="/branding/mmm_black.png"
        width={294}
        height={95}
        alt="company logo"
      />
    </div>
    <h2 className="text-4xl font-bold ml-1">Good...</h2>
  </div>
  );
}