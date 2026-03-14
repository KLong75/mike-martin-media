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

import { industries } from "../lib/industries/industries";

export default function IndustriesList() {
  return (
    <div className="text-white">
      <span className="text-xl mb-10 relative font-semibold">
        Industries
        <span className="absolute -bottom-4 left-0 w-[calc(100%+4rem)] xl:w-[calc(100%+4rem)] border-b border-white border-2"></span>
      </span>
      <ul className="relative space-y-4 lg:space-y-6 min-w-[16rem] mt-6">
        {industries.map((industry, index) => (
          <li key={index} className="relative">
            <a
              href={industry.href}
              className="block transition-transform transform hover:font-medium hover:translate-x-4 ease-in-out duration-500">
              {industry.label}
            </a>
            <span className="absolute bottom-[-.5rem] left-0 w-[calc(100%+4rem)] xl:w-[calc(100%+4rem)] border-b border-white"></span>
          </li>
        ))}
      </ul>
    </div>
  );
}
