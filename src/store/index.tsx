import { createContext, useContext } from "react";

interface AppContextType {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
