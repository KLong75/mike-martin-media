
import MMMLineLogoBlack from "./mmmLineLogoBlack";


export default function BannerVideo({src, title}) {


  return (
    <section className="grid grid-cols-1 gap-4">
      <div className="relative flex justify-center">
        <div className="w-full aspect-ratio-container"> 
          <iframe
            title={title}
            src={src}
            allow="autoplay; fullscreen; picture-in-picture"
            className="absolute top-0 left-0 w-full h-full" 
          ></iframe>
        </div>
      </div>
      <div className="">
        <MMMLineLogoBlack />
      </div>
    </section>
  );
  
}