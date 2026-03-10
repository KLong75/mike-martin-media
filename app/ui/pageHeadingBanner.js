export default function PageHeadingBanner({ title, heading, text, text2 }) {
  return (
    <div className="bg-black text-white flex justify-center items-center">
      <div className="bg-black text-white w-full h-auto flex grid grid-cols-1 md:grid-cols-2 max-w-1000 my-5">
        <div className="flex flex-col justify-center px-12 lg:ml-28 xl:ml-32 ">
          <h1 className="mb-2 text-xs sm:text-sm md:text-base font-semibold">
            {title.toUpperCase()}
          </h1>
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold">
            {heading}
          </h2>
        </div>
        <div className="mt-1 lg:mt-0 flex flex-col justify-center px-12 lg:mr-28 xl:mr-36 ">
          <p className="lg:py-6 text-sm xl:text-base">{text}</p>
          {text2 && (
            <p className="py-4 lg:pb-6 lg:pt-0 text-sm xl:text-base">{text2}</p>
          )}
        </div>
      </div>
    </div>
  );
}


// export default function PageHeadingBanner({ title, heading, text }) {
//   return (
//     <div className="bg-black text-white flex justify-center">
//       <div className="bg-black text-white w-full h-auto flex grid grid-cols-1 md:grid-cols-2 max-w-1000 my-5 ">
//         <div className="flex flex-col justify-center ml-28">
//           <h1 className="mb-1 text-xs sm:text-sm font-semibold">
//             {title.toUpperCase()}
//           </h1>
//           <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl 3xl:text-6xl font-semibold">
//             {heading}
//           </h2>
//         </div>
//         <div className="flex flex-col justify-center mr-28">
//           <p className="lg:py-10 text-sm xl:text-base 2xl:text-xl">{text}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
