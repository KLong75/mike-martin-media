// app/NonceContext.js
"use client";
import { createContext, useContext } from "react";

export const NonceContext = createContext(null);

export function NonceProvider({ children, nonce }) {
  return (
    <NonceContext.Provider value={nonce}>{children}</NonceContext.Provider>
  );
}

export function useNonce() {
  return useContext(NonceContext);
}