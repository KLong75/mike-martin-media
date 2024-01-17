// import from next
import Image from "next/image";
// import components
import MMMLineLogoBlack from "../ui/mmmLineLogoBlack";

export default function BlogPost({ title, image, text, date }) {
    return (
      <>
      <div className="bg-gray-300 border border-2 border-gray-800 rounded-2xl w-3/4 ">
        <div className="flex flex-col justify-center items-center mt-3">
          <h3 className=" text-xl sm:text-2xl font-bold">{title}</h3>
         
          <h5 className=" font-light ">{date}</h5>
        </div>
        <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center w-10/12 md:w-8/12 lg:w-6/12 h-auto ">
          <Image
            src={image}
            alt={title}
            width={1140}
            height={1007}
            className="rounded-xl "
          />
        </div>
        </div>
        <div className="flex justify-center items-center mb-3 mt-3">
        <p
          className='w-3/4 rounded-xl bg-white border border-2 border-gray-800 p-4 text-center overflow-wrap break-words m-2'>
          {text}
        </p>
        </div>
        
      </div>
      <div className="flex justify-center items-center -mt-8 mb-6">
      <MMMLineLogoBlack />
      </div>
      </>
    );
}