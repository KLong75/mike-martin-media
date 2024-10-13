// import from next
import Link from "next/link";
import Image from "next/image";

export default function MmmSiteButtonLogoFirst({
  href,
  label,
  backgroundColor,
  textColor,
  imgSrc,
}) {
  return (
    <Link href={href}>
      <div className={`${backgroundColor} ${textColor} hover:transform hover:scale-105 transition-transform font-bold py-2 px-4 rounded-full flex justify-center items-center cursor-pointer`}>
        <div className="w-14 md:w-16 h-auto mr-1 mmm-site-button-logo-container">
          <Image
            src={imgSrc}
            width={294}
            height={95}
            alt="company logo"
          />
        </div>
        <span className="text-xl md:text-2xl">{label}</span>
      </div>
    </Link>
  );
}