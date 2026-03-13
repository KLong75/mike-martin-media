"use client";
import { useEffect, useRef, useState } from "react";

// FadeAndZoomInOnScroll: fade/zoom in only once when scrolled into view
export default function FadeAndZoomInOnScroll({
  children,
  className = "",
  threshold = 0.1,
  triggerOnce = true, // Added triggerOnce prop
  durationClass = "duration-2000",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && elementRef.current) {
            observer.unobserve(elementRef.current); // Unobserve after first animation
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, triggerOnce]);

  return (
    <div
      ref={elementRef}
      className={`${className} ${
        isVisible
          ? `animate-in fade-in zoom-in ${durationClass}`
          : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}