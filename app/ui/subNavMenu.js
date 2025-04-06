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

  // useEffect(() => {
  //   function handlePointerDown(event) {
  //     // If user clicked outside the sub-menu, close it
  //     if (!subMenuRef.current?.contains(event.target)) {
  //       closeSubMenu();
  //     }
  //   }

  //   // Use pointerdown so it fires before click
  //   document.addEventListener("pointerdown", handlePointerDown);
  //   return () => {
  //     document.removeEventListener("pointerdown", handlePointerDown);
  //   };
  // }, [closeSubMenu]);

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
      }}>
      <ul className="text-sm py-2 px-6 bg-white text-black rounded-full flex flex-row gap-6 justify-center border border-2 border-black">
        {subMenu.map((item, index) => {
          const isLast = index === subMenu.length - 1;
          return (
            <li
              key={index}
              className="font-bold hover:scale-105 hover:transform transition-transform">
              <Link
                href={item.href}
                // onClick={closeSubMenu} // attach onClick to Link
                // onClick={() => {
                //   // Delay closing so the link has time to register
                //   setTimeout(() => closeSubMenu(), 50);
                // }}
                onClick={(e) => {
                  // Prevent outside handler from seeing this as an outside click
                  e.stopPropagation();
                  closeSubMenu();
                }}
                onKeyDown={(e) => {
                  if (isLast && e.key === "Tab" && !e.shiftKey) {
                    closeSubMenu();
                  }
                }}
                className="whitespace-nowrap p-2">
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
