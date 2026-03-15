import { Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";
import { useAISContext } from "../hooks/AISContext";
import type { ShipData } from "../types";

export const VesselMarker = ({ vessel }: { vessel: ShipData }) => {
  const { selectedMMSI, setSelectedMMSI } = useAISContext();
  if (!vessel.latitude || !vessel.longitude) return null; // Skip if no valid position
  return (
    <Marker
      position={[vessel.latitude, vessel.longitude]}
      opacity={selectedMMSI !== null && selectedMMSI !== vessel.mmsi ? 0.2 : 1}
      icon={
        new Icon({
          iconUrl: "boat.png",
          attribution:
            '&copy; <a href="https://www.flaticon.com/">FlatIcon.com</a>',
          iconSize: [25, 25],
        })
      }
      eventHandlers={{
        popupopen: () => setSelectedMMSI(vessel.mmsi),
        popupclose: () => setSelectedMMSI(null),
      }}
    >
      <Popup>
        <div>
          {vessel.vesselName && (
            <>
              {vessel.vesselName}
              {vessel.callsign && ` (${vessel.callsign})`}
              <br />
              {vessel.destination && (
                <>
                  Destination: {vessel.destination}
                  <br />
                </>
              )}
            </>
          )}
          MMSI: {vessel.mmsi}
          <br />
          {vessel.trueHeading !== undefined &&
            Number(vessel.trueHeading) === vessel.trueHeading && (
              <>
                Heading: {vessel.trueHeading}°
                <br />
              </>
            )}
          {vessel.speedOverGround !== undefined &&
            Number(vessel.speedOverGround) === vessel.speedOverGround && (
              <>
                Speed: {vessel.speedOverGround} knots
                <br />
              </>
            )}
          {vessel.msgtime && (
            <>
              Timestamp: {new Date(vessel.msgtime).toLocaleString()}
              <br />
            </>
          )}
        </div>
      </Popup>
    </Marker>
  );
};
