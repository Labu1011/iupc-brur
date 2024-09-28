"use client";

import { cursorType } from "@/components/ui/customCursor";
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext<{
  cursor: cursorType;
  setCursor: React.Dispatch<React.SetStateAction<cursorType>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  cursor: cursorType.cdefault,
  setCursor: () => {},
  isOpen: false,
  setIsOpen: () => {},
});

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [cursor, setCursor] = useState<cursorType>(cursorType.cdefault);
  let [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <AppContext.Provider value={{ cursor, setCursor, isOpen, setIsOpen }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
