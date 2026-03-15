import { createContext, useContext, useState } from "react"
import type { Position } from "../types"

type AISContextType = {
  selectedMMSI: number | null
  setSelectedMMSI: (mmsi: number | null) => void
  history: Position[]
  setHistory: (history: Position[]) => void
  authToken: string | null
  setAuthToken: (token: string | null) => void
  authTokenExpiry: Date | null
  setAuthTokenExpiry: (date: Date | null) => void
}

const AISContext = createContext<AISContextType>({
  selectedMMSI: null,
  history: [],
  authToken: null,
  authTokenExpiry: null,
  setSelectedMMSI: () => { },
  setHistory: () => { },
  setAuthToken: () => { },
  setAuthTokenExpiry: () => { },
});
export const AISContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedMMSI, setSelectedMMSI] = useState<number | null>(null);
  const [history, setHistory] = useState<Position[]>([]);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [authTokenExpiry, setAuthTokenExpiry] = useState<Date | null>(null);
  return <AISContext.Provider value={{ selectedMMSI, setSelectedMMSI, history, setHistory, authToken, setAuthToken, authTokenExpiry, setAuthTokenExpiry }} >{children}</AISContext.Provider>;
}
export const useAISContext = () => {
  const context = useContext(AISContext);
  if (!context) {
    throw new Error("useAISContext must be used within an AISProvider");
  }
  return context;
}
