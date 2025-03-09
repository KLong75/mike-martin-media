// import from next
// import Image from "next/image";
// import components
import Image from "./image";

export default function MMMLineLogoBlack() {
  return (
    <div className="p-2 flex justify-center items-center -mt-3">
      <Image
        src="/branding/mmm_line_logo.png"
        height={60}
        width={1140}
        alt=""
      />
    </div>
  );
}