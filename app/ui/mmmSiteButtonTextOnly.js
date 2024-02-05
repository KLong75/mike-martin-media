// import from next
import Link from "next/link";
import Image from "next/image";

export default function MmmSiteButtonTextOnly({
  href,
  label,
  backgroundColor,
  textColor,
  imgSrc,
}) {
  return (
    <Link href={href}>
      <div className={`${backgroundColor} ${textColor} hover:transform hover:scale-110 transition-transform font-bold py-2 px-4 rounded-full flex justify-center items-center cursor-pointer w-36`}>
        <span>{label}</span>
      </div>
    </Link>
  );
}