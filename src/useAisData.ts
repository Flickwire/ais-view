import { fetchEventData } from "fetch-sse";
import { useEffect, useState } from "react";

type ShipData = {
  mmsi: number;
  latitude: number;
  longitude: number;
  trueHeading: number;
  speedOverGround: number;
  msgtime: string;
  vesselName?: string;
  callsign?: string;
  destination?: string;
};

type AisMessage = {
  type: string;
  messageType: number;
  courseOverGround: number;
  aisClass: string;
  altitude: number;
  latitude: number;
  longitude: number;
  navigationalStatus: number;
  rateOfTurn: number;
  speedOverGround: number;
  trueHeading: number;
  mmsi: number;
  msgtime: string;
  stream: string;
  name?: string;
  callSign?: string;
  destination?: string;
};

export function useAisData(authToken: string | null) {
  const [positions, setPositions] = useState<Record<number, ShipData>>({});

  useEffect(() => {
    if (!authToken) return;
    const named: Record<number, boolean> = {}; // Track which MMSIs have received name info
    fetchEventData("https://live.ais.barentswatch.no/live/v1/sse/ais", {
      headers: {
        authorization: `Bearer ${authToken}`,
      },
      onOpen: () => {
        console.log("SSE connection opened");
      },
      onMessage: (event) => {
        if (!event || !event.data) return;
        try {
          const data = JSON.parse(event.data) as AisMessage;
          if (
            (data.messageType === 1 ||
              data.messageType === 2 ||
              data.messageType === 3 ||
              data.messageType === 18 ||
              data.messageType === 27) &&
            data.latitude &&
            data.longitude
          ) {
            setPositions((prevPositions) => {
              const newPositions = { ...prevPositions };
              if (prevPositions[data.mmsi]) {
                newPositions[data.mmsi] = {
                  ...prevPositions[data.mmsi],
                  ...data,
                };
              } else {
                newPositions[data.mmsi] = data;
              }
              return newPositions;
            });
          } else if (
            data.messageType === 5 ||
            data.messageType === 24
          ) {
            if (named[data.mmsi]) return; // Skip if we already have the name for this MMSI
            named[data.mmsi] = true; // Mark this MMSI as having received name info
            setPositions((prevPositions) => {
              const newPositions = { ...prevPositions };
              newPositions[data.mmsi] = {
                ...(newPositions[data.mmsi] || {}),
                vesselName: data.name,
                callsign: data.callSign,
                destination: data.destination,
              };
              return newPositions;
            });
          }
        } catch (error) {
          console.error("Error parsing AIS data:", error);
        }
      },
      onClose: () => {
        console.log("SSE connection closed");
      },
      onError: (error) => {
        console.error("SSE error:", error);
      },
    });
  }, [authToken]);

  return positions;
}
