import { capabilities } from "../lib/capabilities";

export default function OurCapabilitiesList() {
  return (
    <div className="">
      <h6 className="text-xl mb-4">Our Capabilities</h6>
      
      <ul className="space-y-4 min-w-[16rem]">
        {capabilities.map((capability, index) => (
          <li key={index} className="relative">
            <a href={capability.href} className="">{capability.label}</a>
            <span className="absolute bottom-0 left-0 w-[calc(100%+2rem)] border-b border-white"></span>
          </li>
        ))}
      </ul>
    </div>
  );
}