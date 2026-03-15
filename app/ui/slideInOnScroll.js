// "use client";

// import { useEffect, useRef, useState } from "react";

// export default function SlideInOnScroll({
//   children,
//   className = "",
//   threshold = 0.25,
//   triggerOnce = true,
// }) {
//   const [isVisible, setIsVisible] = useState(false);
//   const elementRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           if (triggerOnce && elementRef.current) {
//             observer.unobserve(elementRef.current);
//           }
//         } else if (!triggerOnce) {
//           setIsVisible(false);
//         }
//       },
//       { threshold },
//     );

//     if (elementRef.current) {
//       observer.observe(elementRef.current);
//     }

//     return () => {
//       if (elementRef.current) {
//         observer.unobserve(elementRef.current);
//       }
//     };
//   }, [threshold, triggerOnce]);

//   return (
//     <div
//       ref={elementRef}
//       className={`${className} ${isVisible ? "animate-slide-in" : "opacity-0"}`}>
//       {children}
//     </div>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";

export default function SlideInOnScroll({
  children,
  className = "",
  triggerOnce = true,
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
            observer.unobserve(elementRef.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0, // CHANGED: Trigger as soon as the element is visible
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
      className={`${className} ${isVisible ? "animate-slide-in" : "opacity-0"}`}>
      {children}
    </div>
  );
}
