export type Position = [number, number]

export type HistoryDataPoint ={
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

export type ShipData = {
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

export type AisMessage = {
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
