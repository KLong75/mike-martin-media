// import from next
import Link from "next/link";
import Image from "next/image";

export default function WorkCategoryButton({categoryName}) {
  return (
    <button
      className="bg-black hover:transform hover:scale-110 transition-transform text-white font-bold py-2 px-4 rounded-full"
      type="button">
      <Link href="/photography">
      <div className="flex justify-center items-center">
        <span>Check out</span>
      </div>
      <div className="flex justify-center items-center">
      <div className="flex justify-center items-center w-14 h-auto mr-2 mb-1">
          <Image
            src="/branding/mmm_logo_white.png"
            width={294}
            height={95}
            alt="company logo"
          />
        </div>
        <span>{categoryName}</span>
        </div>
      </Link>
    </button>
  );
}