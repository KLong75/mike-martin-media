// import from next
import Image from "next/image";
import VideoFrame from "../ui/videoFrame";

export const metadata = {
  title: 'Page 3',
}

export default function Page() {
  return (
    <main className='bg-slate-50 flex-1'>
      <div className="flex justify-center items-center mt-12">
      <h2 className="text-4xl font-bold mr-2">The </h2>
        <div className="flex justify-center items-center w-24 h-8 mb-1">
          <Image
            src="/branding/mmm_black.png"
            width={294}
            height={95}
            alt="company logo"
          />
        </div>
        <h2 className="text-4xl font-bold ml-2">Blog</h2>
      </div>
  
    </main>
  );
}