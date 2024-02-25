// import from next
import Link from "next/link";
import Image from "next/image";

export default function ContactUsButton() {
  return (
    <button
      className="bg-black hover:transform hover:scale-110 transition-transform text-white font-bold py-2 px-4 rounded-full"
      type="button">
      <Link href="/contact">
      <div className="flex justify-center items-center">
        <span className="text-xl md:text-2xl">Contact</span>
        <div className="flex justify-center items-center w-14 ml-2 h-auto mb-1">
          <Image
            src="/branding/mmm_logo_white.png"
            width={294}
            height={95}
            alt="company logo"
          />
        </div>
        </div>
      </Link>
    </button>
  );
}
