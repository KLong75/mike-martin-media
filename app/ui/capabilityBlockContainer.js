//import components
import CapabilityBlock from "./capabilityBlock";
//import data
import { capabilities } from "../lib/capabilities/capabilities";

export default function CapabilityBlockContainer() {
  return (
    <div className="flex grid grid-cols-2 xl:grid-cols-3 gap-1">
      {capabilities.map((capability, index) => (
        <CapabilityBlock
          key={index}
          label={capability.short_label}
          href={capability.href}
          icon_src={capability.icon_src}
          description={capability.description}
        />
      ))}
    </div>
  );
}
