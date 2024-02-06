export default function TextSegment({ text }) {
  return (
    <div className="flex justify-center items-center ">
      <p className="p-2 text-sm md:text-base text-center text-balance w-10/12 md:w-1/2 ">{text}</p>
    </div>
    // <div className="flex flex-col justify-center items-center h-full p-6 lg:-mb-0">
    //   <div className="flex flex-col justify-between h-full shadow-2xl">
    //     <div>
         
    //       <p className="text-left w-full p-4 font-semibold text-pretty text-balance text-wrap">
    //         {text}
    //       </p>
    //     </div>
       
    //   </div>
    // </div>
  );
}