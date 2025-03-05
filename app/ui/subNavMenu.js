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

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [closeSubMenu]);

  return (
    <nav 
      id="subNavMenu" 
      ref={subMenuRef}
      tabIndex={-1}
      onBlur={(e) => {
        // If next focus target is outside this submenu, close it
        if (!subMenuRef.current.contains(e.relatedTarget)) {
          closeSubMenu();
        }
      }}
    >
      <ul className="text-sm py-2 px-6 bg-white text-black rounded-full flex flex-row gap-6 justify-center">
        {subMenu.map((item, index) => {
          const isLast = index === subMenu.length - 1;
          return (
            <li
              key={index}
              className="font-bold hover:scale-105 hover:transform transition-transform">
              <Link href={item.href}>
                <span 
                  className="whitespace-nowrap" 
                  onClick={closeSubMenu}
                  onKeyDown={(e) => {
                    if (isLast && e.key === "Tab" && !e.shiftKey) {
                      closeSubMenu();
                    }
                  }}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

{
  /* (
          <li key={index} className="font-bold hover:scale-105 hover:transform transition-transform">
            <Link href={item.href}>
              <span className="whitespace-nowrap" onClick={closeSubMenu}>{item.label}</span>
            </Link>
          </li>
        ) */
}
