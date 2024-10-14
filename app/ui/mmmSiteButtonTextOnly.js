// import from next
import Link from "next/link";

export default function MmmSiteButtonTextOnly({
  href,
  label,
  backgroundColor,
  textColor,
}) {
  return (
    <Link href={href}>
      <div className={`${backgroundColor} ${textColor} hover:transform hover:scale-105 transition-transform font-bold py-2 px-4 rounded-full flex justify-center items-center cursor-pointer w-36`}>
        <span className="text-xl md:text-2xl">{label}</span>
      </div>
    </Link>
  );
}