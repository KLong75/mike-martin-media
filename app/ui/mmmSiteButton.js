// import from next
import Link from "next/link";
import Image from "next/image";

export default function MmmSiteButton({
  href,
  label,
  backgroundColor,
  textColor,
  imgSrc,
}) {
  return (
    <Link href={href}>
      <div className={`${backgroundColor} ${textColor} hover:transform hover:scale-110 transition-transform font-bold py-2 px-4 rounded-full flex justify-center items-center cursor-pointer`}>
        <span>{label}</span>
        <div className="w-14 h-auto ml-1 mb-1">
          <Image
            src={imgSrc}
            width={294}
            height={95}
            alt="company logo"
          />
        </div>
      </div>
    </Link>
  );
}


