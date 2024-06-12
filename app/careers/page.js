// import components
import  WereHiring  from "../ui/wereHiring";
import MMMLineLogoBlack from "../ui/mmmLineLogoBlack";
import BannerImage from "../ui/bannerImage";
// import data


export const metadata = {
  title: "Careers",
  description:
    "Work at MMM.",
};

export default function Page() {
  return (
    <main className="flex-1 ">
      <div className="-mt-1">
        <BannerImage
          src=""
          alt=""
          width={5008}
          height={1996}
          priority={true}
        />
      </div>
      <div className="bg-black text-white flex justify-center items-center w-full h-20 md:h-24 lg:h-28">
        <h1 className="text-center font-bold text-4xl md:text-5xl lg:text-6xl mt-2">
          CAREERS
        </h1>
      </div>
     
      <div className="">
        <a href="/c/Mike-Martin-Media/Jobs?hiring_company=102ff8a1?source=hiring_badge&amp;tsid=100002000" title="Mike Martin Media Jobs" target="_blank"><img src="https://www.ziprecruiter.com/assets/static/img/badge-hiring-2-300px.png" width="300" height="240" alt="We're Hiring on ZipRecruiter"/></a>
        </div>
        <WereHiring />
        <div className="w-full">
          <MMMLineLogoBlack />
        </div>
      </main>
  );
}