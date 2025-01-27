import { useEffect, useRef } from "react";
import Link from "next/link";

export default function SubNavMenuMobile({ subMenu, closeSubMenu, setMenuOpen }) {
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

  const handleLinkClick = () => {
    closeSubMenu();
    setMenuOpen(false);
  };

  return (
    <div id="subNavMenu" ref={subMenuRef} className="">
      <ul className="p-4 space-y-6 rounded-2xl bg-white text-black ">
        {subMenu.map((item, index) => (
          <li key={index} className="font-bold text-center">
            <Link href={item.href}>
              <span className="whitespace-nowrap" onClick={handleLinkClick}>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}