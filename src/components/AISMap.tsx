import { MapContainer, TileLayer } from "react-leaflet";
import { useAisData } from "../hooks/useAisData";
import { useAuth } from "../hooks/useAuth";
import { VesselHistory } from "./VesselHistory";
import { VesselMarker } from "./VesselMarker";

export const AISMap = () => {
  useAuth();
  const positions = useAisData();
  return (
    <MapContainer center={[65.76, 7.52]} zoom={5} className="map">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {Object.values(positions)
        .map((pos) => (
          <VesselMarker key={pos.mmsi} vessel={pos} />
        ))}
      <VesselHistory />
    </MapContainer>
  );
};
