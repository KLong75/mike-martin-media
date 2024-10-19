// import components
import MMMLineLogoBlack from "../ui/mmmLineLogoBlack";
import BannerImage from "../ui/bannerImage";
import JoinTheTeam from "../ui/joinTheTeam";
// import images
import blackMmmLogo from "../../public/branding/black-mmm-logo-1642x560.png";

export const metadata = {
  title: "Careers",
  description: "Work at MMM! Apply on ZipRecruiter. We are hiring!",
  alternates: {
    canonical: "/careers",
  },
};

export default function Page() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <div className="w-52 sm:w-72 md:w-128 lg:w-144 py-12">
        <BannerImage
          src={blackMmmLogo}
          alt="Work at MMM"
          priority
        />
      </div>
      <div className="bg-black text-white flex justify-center items-center w-full h-20 md:h-24 lg:h-28">
        <h1 className="text-center font-bold text-4xl md:text-5xl lg:text-6xl mt-2">
          CAREERS
        </h1>
      </div>
      <div className="flex-grow flex flex-col justify-center max-w-600 mt-6">
        <JoinTheTeam />
      </div>
      <div className="w-full mt-auto">
        <MMMLineLogoBlack />
      </div>
    </main>
  );
}
