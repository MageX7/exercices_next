"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Définir le type pour le contexte
interface ContextType {
  chiffre: number;
  setChiffre: (newValue: number) => void;
}

// Initialiser le contexte avec une valeur par défaut
const MyContext = createContext<ContextType | undefined>(undefined);

// Créer un provider pour encapsuler l'état
export const Provider = ({ children }: { children: ReactNode }) => {
  const [chiffre, setChiffre] = useState<number>(0);

  return (
    <MyContext.Provider value={{ chiffre, setChiffre }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook pour accéder au contexte
export const useCountContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext doit être utilisé à l’intérieur de MyContextProvider');
  }
  return context;
};
