"use client";
import { useEffect, useRef, useState } from "react";

// FadeInOnScroll: fade/zoom in only once when scrolled into view
export default function FadeInOnScroll({
  children,
  className = "",
  triggerOnce = true, // Kept triggerOnce prop
  durationClass = "duration-2000",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // CHANGED: Use threshold 0 and rootMargin to trigger when element is 25% up from bottom
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
      {
        threshold: 0.1, // CHANGED: Trigger as soon as the element is 10% visible
        rootMargin: "0px 0px -10% 0px", // CHANGED: Bottom 10% of viewport is ignored
      },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [triggerOnce]);

  return (
    <div
      ref={elementRef}
      className={`${className} ${
        isVisible ? `animate-in fade-in  ${durationClass}` : "opacity-0"
      }`}>
      {children}
    </div>
  );
}