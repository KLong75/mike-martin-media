// import from next
// import Image from "next/image";
// import components
import Image from "next/image";
// import logos
import mmmLineLogoBlack from "../../public/branding/mmm_line_logo.png";
import mmmLineLogoWhite from "../../public/branding/mmm_line_logo_white.png";

export default function MMMLineLogo({color, className}) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <Image
        // src="/branding/mmm_line_logo.png"
        src={color === "white" ? mmmLineLogoWhite : mmmLineLogoBlack}
        height={60}
        width={1140}
        alt=""
      />
    </div>
  );
}
