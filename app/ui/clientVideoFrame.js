// import from next
import Image from "next/image";

export default function ClientVideoFrame({ src, client, category }) {
  return (
    <>
    <div className="flex justify-center items-center">
      <h3 className="text-sm font-bold">{client}</h3>
    </div>
    <div className="flex justify-center items-center -mb-8 sm:-mb-2 md:-mb-4 lg:-mb-2" >
      <h4 className="text-sm font-bold">{category}</h4>
    </div>
    
    <iframe
      src={src}
      client={client}
      category={category}
      allow="autoplay; fullscreen; picture-in-picture"
      // className="w-full h-52  sm:w-full sm:h-80 md:w-full md:h-128 lg:w-full lg:h-144"
      className="w-full p-4 iframe-height"
      >
    </iframe>
       
    
    <div className="flex justify-center items-center w-auto -mt-10 sm:-mt-8 md:-mt-4 lg:-mt-2">
        <Image
          src="/branding/mmm_line_logo.png"
          height={60}
          width={1140}
          alt="MMM logo"
        />
      </div>
      </>
  );
}