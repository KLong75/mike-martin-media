//import from next
import Link from "next/link";
// import from headless ui
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
// import from react-icons
import { HiChevronDown } from "react-icons/hi";

export default function SubNavPopover({ category }) {
  return (
    <Popover className="relative">
      <PopoverButton className="flex items-center gap-2 font-bold">
        {category.label}
        <HiChevronDown className="size-5 group-data-[open]:rotate-180" />
      </PopoverButton>

      <PopoverPanel className="absolute z-50 w-auto bg-white border border-black rounded-lg shadow-lg p-4 flex left-1/2 transform -translate-x-1/2 mt-2">
        {({ close }) => (
          <ul className="space-y-2 ">
            {category.sub_items.map((item, index) => (
              <li key={index} className="text-sm px-2 py-1 font-semibold text-black">
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