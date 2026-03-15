import { useEffect } from "react";
import type { HistoryDataPoint } from "../types";
import { useAISContext } from "./AISContext";

export const useHistory = () => {
  const { authToken, selectedMMSI, setHistory } = useAISContext();

  useEffect(() => {
    if (selectedMMSI === null) setHistory([]);
    if (!authToken) return;
    fetch(
      `https://historic.ais.barentswatch.no/v1/historic/trackslast24hours/${selectedMMSI}?modelFormat=Json`,
      {
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      },
    )
      .then((response) => response.json())
      .then((data) =>
        setHistory(
          data.map((entry: HistoryDataPoint) => [
            entry.latitude,
            entry.longitude,
          ]),
        ),
      )
      .catch((error) => console.error("Error fetching history:", error));
  }, [selectedMMSI, authToken, setHistory]);
  return {};
};
