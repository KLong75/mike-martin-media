import { capabilities } from "../lib/capabilities";

export default function OurCapabilitiesList() {
  return (
    <div className="text-white">
      <h6 className="text-xl mb-4 relative">
        Our Capabilities
        <span className="absolute bottom-[-1rem] left-0 w-[calc(100%+6rem)] border-b border-white border-2"></span>
      </h6>
      
      <ul className="relative space-y-4 min-w-[16rem] mt-6">
        {capabilities.map((capability, index) => (
          <li key={index} className="relative">
            <a href={capability.href} className="block transition-transform transform hover:translate-x-4 ease-in-out duration-500">{capability.label}</a>
            <span className="absolute bottom-[-.5rem] left-0 w-[calc(100%+6rem)] border-b border-white"></span>
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