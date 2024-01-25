// import from next
import Link from "next/link";
import Image from "next/image";

export default function MeetTheTeamButton() {
  return (
    // <button
    //   className="bg-black hover:transform hover:scale-110 transition-transform text-white font-bold py-2 px-4 rounded-full cursor-pointer"
    //   type="button">
      <Link href="/about_mmm/our_team">
      <div className="flex justify-center items-center bg-black hover:transform hover:scale-110 transition-transform text-white font-bold py-2 px-4 rounded-full cursor-pointer">
        
      <div className="flex justify-center items-center w-14 h-auto mr-2 mb-1">
          <Image
            src="/branding/mmm_logo_white.png"
            width={294}
            height={95}
            alt="company logo"
          />
        </div>
        <span className="-ml-2">eet the Team </span>
        </div>
      </Link>
    // </button>
  );
}