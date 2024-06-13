// import components
import  WereHiring  from "../ui/wereHiring";
import MMMLineLogoBlack from "../ui/mmmLineLogoBlack";
import BannerImage from "../ui/bannerImage";
// import data


export const metadata = {
  title: "Careers",
  description:
    "Work at MMM! Apply on ZipRecruiter. We are hiring!",
};

export default function Page() {
  return (
    <main className="flex flex-col justify-center items-center ">
      <div className="w-48 h-full py-12">
        <BannerImage
          src="/branding/black_mmm_large_crop_resize.png"
          alt=""
          width={1642}
          height={560}
        />
      </div>
      <div className="bg-black text-white flex justify-center items-center w-full h-20 md:h-24 lg:h-28">
        <h1 className="text-center font-bold text-4xl md:text-5xl lg:text-6xl mt-2">
          CAREERS
        </h1>
      </div>
     
      <div className="">
        
        </div>
        <WereHiring />
        <div className="w-full">
          <MMMLineLogoBlack />
        </div>
      </main>
  );
}