// import from react
import { useState } from "react";
//import from next
import Link from "next/link";
// import from headless ui
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
// import from react-icons
import { HiChevronDown } from "react-icons/hi";
// import { HiChevronUp } from "react-icons/hi";

export default function SubNavPopover({ category }) {
  return (
    <Popover className="relative">
      <PopoverButton className="flex items-center gap-2 ">
        {category.label}
        <HiChevronDown className="size-5 group-data-open:rotate-180" />
      </PopoverButton>

      <PopoverPanel className="absolute z-50 w-auto bg-white lg:border lg:border-black rounded-2xl lg:rounded-full shadow-lg p-4 flex left-1/2 transform -translate-x-1/2 mt-2 popover-panel">
        {({ close }) => (
          <ul className="lg:flex lg:flex-row">
            {category.sub_items.map((item, index) => (
              <li key={index} className="text-sm px-2 py-2 lg:py-0 font-semibold text-black">
                <Link
                  href={item.href}
                  onClick={() => {
                    // Close the popover when this link is clicked
                    close();
                  }}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </PopoverPanel>
    </Popover>
  );
}