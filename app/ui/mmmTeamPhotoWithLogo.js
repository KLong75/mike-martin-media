// import components
import Image from "next/image";

export default function MMMTeamPhotoWithLogo() {
  return (
    <div className="relative w-full">
      <Image
        fetchPriority="high"
        priority
        src="/images/home-page/mmm-team-900x600.webp"
        width={900}
        height={600}
        alt="The MMM Team"
        aria-label="The MMM Team"
        className="w-full h-auto"
        sizes="(max-width: 768px) 150px, (max-width: 1024px) 710px, (max-width: 1280px) 710px, (max-width: 1440px) 600px, (max-width: 1600px) 900px, 1200px"
      />
      <Image
        // priority
        src="/branding/mmm-line-logo-left-white.png"
        width={708}
        height={65}
        alt=""
        className="absolute bottom-[2rem] sm:bottom-[3rem] md:bottom-[3rem] lg:bottom-15 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full"
        sizes="(max-width: 768px) 150px, (max-width: 1200px) 300px, 600px"
      />
    </div>
  );
}
