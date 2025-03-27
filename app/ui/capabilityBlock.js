//import from next
import Link from "next/link";
//import components
import Image from "./image";

export default function CapabilityBlock({
  label,
  href,
  icon_src,
  description,
}) {
  return (
    <div className="m-2 flex flex-col bg-[#F0F0F0] p-4 xl:p-6 hover:invert transition duration-1000">
      <Link href={href} className="cursor-pointer">
        <div className="w-14 md:w-72 lg:w-96 h-auto py-4">
          <Image
            src={icon_src}
            alt=""
            width={96}
            height={96}
          />
        </div>
        <h3 className="font-bold lg:text-2xl">{label}</h3>
        <h4 className="text-xs lg:text-sm py-2">{description}</h4>
      </Link>
    </div>
  );
}
