import { useEffect, useState } from "react";

type HistoryDataPoint ={
  "courseOverGround": number,
  "latitude": number,
  "longitude": number,
  "name": string,
  "rateOfTurn": number,
  "shipType": number,
  "speedOverGround": number,
  "trueHeading": number,
  "navigationalStatus": number,
  "mmsi": number,
  "msgtime": string,
  "stream": string
}

type Position = [number, number];

export const useHistory = (authToken: string | null) => {
  const [selectedMmsi, setSelectedMmsi] = useState<number | null>(null);
  const [history, setHistory] = useState<Position[]>([]);

  useEffect(() => {
    if (selectedMmsi === null) setHistory([]);
    if (!authToken) return;
    fetch(`https://historic.ais.barentswatch.no/v1/historic/trackslast24hours/${selectedMmsi}?modelFormat=Json`, {
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setHistory(data.map((entry: HistoryDataPoint) => [entry.latitude, entry.longitude])))
      .catch((error) => console.error("Error fetching history:", error));
  }, [selectedMmsi, authToken]);
  return { selectedMmsi, setSelectedMmsi, history };
};
