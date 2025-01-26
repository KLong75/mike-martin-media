import { useEffect, useRef } from "react";
import Link from "next/link";

export default function SubNavMenu({ subMenu, closeSubMenu }) {
  const subMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (subMenuRef.current && !subMenuRef.current.contains(event.target)) {
        closeSubMenu();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeSubMenu]);

  return (
    <div id="subNavMenu" ref={subMenuRef} className="">
      <ul className="text-sm py-2 px-6 bg-white text-black rounded-full flex flex-row gap-6 justify-center">
        {subMenu.map((item, index) => (
          <li key={index} className="font-bold hover:scale-105 hover:transform transition-transform">
            <Link href={item.href}>
              <span className="whitespace-nowrap" onClick={closeSubMenu}>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}