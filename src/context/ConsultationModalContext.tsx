"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ConsultationModalContextType = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const ConsultationModalContext = createContext<ConsultationModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export function ConsultationModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ConsultationModalContext.Provider
      value={{
        isOpen,
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}
    </ConsultationModalContext.Provider>
  );
}

export function useConsultationModal() {
  return useContext(ConsultationModalContext);
}
