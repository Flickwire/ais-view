import { useState } from "react";

export interface AisData {
  Message: {
    PositionReport: {
      Cog: number;
      CommunicationState: number;
      Latitude: number;
      Longitude: number;
      MessageID: number;
      NavigationalStatus: number;
      Raim: number;
      RateOfTurn: number;
      RepeatIndicator: number;
      Sog: number;
      Spare: number;
      SpecialManoeuvreIndicator: number;
      Timestamp: number;
      TrueHeading: number;
      UserID: number;
      Valid: boolean;
    };
    MessageType: "PositionReport";
    MetaData: {
      MMSI: number;
      ShipName: string;
      latitude: number;
      longitude: number;
      time_utc: string;
    }
  }
}

export type ShipPosition = {
  latitude: number;
  longitude: number;
  timestamp: string;
  mmsi: number;
  heading: number;
  shipName: string;
}

const dummyData: ShipPosition[] = [
  {
    latitude: 1,
    longitude: -0.09,
    timestamp: new Date().toISOString(),
    mmsi: 123456789,
    heading: 90,
    shipName: "Dummy Ship 1",
  },
  {
    latitude: 1.5,
    longitude: -0.5,
    timestamp: new Date().toISOString(),
    mmsi: 987654321,
    heading: 180,
    shipName: "Dummy Ship 2",
  },
];

export function useAisData() {
  const socket = new WebSocket('wss://stream.aisstream.io/v0/stream');
  const [positions, setPositions] = useState(dummyData as ShipPosition[]);
  socket.onopen = () => {
    const subscriptionMessage = {
        Apikey: "f4d5daecbac33252140c9df0544e8380c77332ee",
        BoundingBoxes: [[[-90, -180], [90, 180]]],
        FilterMessageTypes: ["PositionReport"]
    }
    socket.send(JSON.stringify(subscriptionMessage));
  };
  
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log('Received AIS data:', data);
    const shipPosition: ShipPosition = {
      latitude: data.Message.MetaData.latitude,
      longitude: data.Message.MetaData.longitude,
      timestamp: data.Message.MetaData.time_utc,
      mmsi: data.Message.MetaData.MMSI,
      heading: data.Message.PositionReport.TrueHeading,
      shipName: data.Message.MetaData.ShipName,
    };
    setPositions((prev) => [...prev, shipPosition]);
  };

  return positions;
}