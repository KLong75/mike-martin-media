// import { industries } from "../lib/industries"

// export default function IndustriesList() {
//   return (
//     <div className="">
//      <h6 className="text-xl mb-4"> Industries</h6>
//      <ul
//         className="space-y-4 min-w-[16rem]"
//       >
//      {industries.map((industry, index) => (
//         <li key={index} className="relative ">
//           <a href={industry.href} className="">{industry.label}</a>
//           <span className="absolute bottom-0 left-0 w-[calc(100%+2rem)] border-b border-white"></span>
//         </li>
//       ))}
//       </ul>
//     </div>
//   )
// };

import { industries } from "../lib/industries"

export default function IndustriesList() {
  return (
    <div className="text-white">
     <h6 className="text-xl mb-4 relative">
       Industries
       <span className="absolute bottom-[-1rem] left-0 w-[calc(100%+2rem)] border-b border-white border-2"></span>
     </h6>
     <ul className="relative space-y-4 min-w-[16rem] mt-6">
     {industries.map((industry, index) => (
        <li key={index} className="relative">
          <a href={industry.href} className="block transition-transform transform hover:translate-x-4 ease-in-out duration-500">{industry.label}</a>
          <span className="absolute bottom-[-.5rem] left-0 w-[calc(100%+2rem)] border-b border-white"></span>
        </li>
      ))}
      </ul>
    </div>
  )
};