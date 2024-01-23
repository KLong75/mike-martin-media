"use client";

// import from react
import { useState, useEffect } from "react";
// import icons
// import { MdArrowUpward } from "react-icons/md";
import { FaAnglesUp } from "react-icons/fa6";

export default function ScrollToTopButton() {
  const [scrollToTopButtonVisible, setScrollToTopButtonVisible] =
    useState(false);

  useEffect(() => {
    const toggleButtonVisibility = () => {
      if (window.scrollY > 200) {
        setScrollToTopButtonVisible(true);
      } else {
        setScrollToTopButtonVisible(false);
      }
    };
    window.addEventListener("scroll", toggleButtonVisibility);
    return () => window.removeEventListener("scroll", toggleButtonVisibility);
  }, []);

  // Scroll smoothly to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex ml-auto ">
      <button
        aria-label="scroll to top button"
        name="scroll to top button"
        className={`fixed bottom-8 right-4 rounded-full bg-black p-2 w-12 hover:bg-gray-800 hover:transform hover:scale-110 transition-all duration-300 ease-in-out  ${
          scrollToTopButtonVisible ? "opacity-98" : "opacity-0"
        }`}
        onClick={scrollToTop}
        style={{
          transition: "opacity 0.3s ease-in-out",
        }}>
        <FaAnglesUp size={24} className="h-8 w-8" color="white"/>
      </button>
    </div>
  );
}
