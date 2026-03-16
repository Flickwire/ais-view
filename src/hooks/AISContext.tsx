import { createContext, useContext, useState } from "react";
import type { Position } from "../types";
import { useAuth } from "./useAuth";

type AISContextType = {
  selectedMMSI: number | null;
  setSelectedMMSI: (mmsi: number | null) => void;
  history: Position[];
  setHistory: (history: Position[]) => void;
  authToken: string | null;
  authTokenExpiry: Date | null;
};

const AISContext = createContext<AISContextType>({
  selectedMMSI: null,
  history: [],
  authToken: null,
  authTokenExpiry: null,
  setSelectedMMSI: () => { },
  setHistory: () => { },
});
export const AISContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedMMSI, setSelectedMMSI] = useState<number | null>(null);
  const [history, setHistory] = useState<Position[]>([]);
  const { authToken, authTokenExpiry } = useAuth();
  return (
    <AISContext.Provider
      value={{
        selectedMMSI,
        setSelectedMMSI,
        history,
        setHistory,
        authToken,
        authTokenExpiry,
      }}
    >
      {children}
    </AISContext.Provider>
  );
};
export const useAISContext = () => {
  const context = useContext(AISContext);
  if (!context) {
    throw new Error("useAISContext must be used within an AISProvider");
  }
  return context;
};
