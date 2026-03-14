import { capabilities } from "../lib/capabilities/capabilities";

export default function OurCapabilitiesList() {
  return (
    <div className="text-white">
      <span className="text-xl mb-10 relative font-semibold">
        Our Capabilities
        <span className="absolute -bottom-4 left-0 w-[calc(100%+4rem)] xl:w-[calc(100%+4rem)] border-b border-white border-2"></span>
      </span>

      <ul className="relative space-y-4 lg:space-y-6 min-w-[16rem] mt-6">
        {capabilities.map((capability, index) => (
          <li key={index} className="relative">
            <a
              href={capability.href}
              className="block transition-transform transform hover:font-medium hover:translate-x-4 ease-in-out duration-500">
              {capability.label}
            </a>
            <span className="absolute bottom-[-.5rem] left-0 w-[calc(100%+4rem)] xl:w-[calc(100%+4rem)] border-b border-white"></span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// import { capabilities } from "../lib/capabilities";

// export default function OurCapabilitiesList() {
//   return (
//     <div className="relative w-full">
//       <h6 className="text-xl mb-4 relative">
//         Our Capabilities
//         <span className="absolute bottom-0 left-0 w-[calc(100%+2rem)] border-b border-white"></span>
//       </h6>

//       <ul className="relative space-y-4 min-w-[16rem]">
//         {capabilities.map((capability, index) => (
//           <li key={index} className="relative">
//             <a href={capability.href} className="">{capability.label}</a>
//             <span className="absolute bottom-0 left-0 w-[calc(100%+2rem)] border-b border-white"></span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
