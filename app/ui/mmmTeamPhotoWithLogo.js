// import components
import Image from "./image";

export default function MMMTeamPhotoWithLogo() {
  return (
    <div className="relative w-full">
      <Image
        priority
        src="/images/home-page/mmm-team-big.png"
        width={819}
        height={546}
        alt="The MMM Team"
        aria-label="The MMM Team"
        className="w-full h-auto"
      />
      <Image
        priority
        src="/branding/mmm-line-logo-left-white.png"
        width={708}
        height={65}
        alt=""
        className="absolute bottom-[2rem] sm:bottom-[3rem] md:bottom-[3rem] lg:bottom-15 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full"
      />
    </div>
  );
}
