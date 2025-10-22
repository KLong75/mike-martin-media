"use client";
import { createContext, useContext, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const PreviousRouteContext = createContext("/");

export function PreviousRouteProvider({ children }) {
  const pathname = usePathname();
  const previousPathRef = useRef("/");

  useEffect(() => {
    previousPathRef.current = pathname;
  }, [pathname]);

  return (
    <PreviousRouteContext.Provider value={previousPathRef.current}>
      {children}
    </PreviousRouteContext.Provider>
  );
}

export function usePreviousRoute() {
  return useContext(PreviousRouteContext);
}