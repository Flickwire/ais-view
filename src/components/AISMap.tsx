import { Icon } from "leaflet";
import { MapContainer, Marker, Polyline, Popup, TileLayer } from "react-leaflet";
import { useAISContext } from "../hooks/AISContext";
import { useAisData } from "../hooks/useAisData";
import { useAuth } from "../hooks/useAuth";
import { useHistory } from "../hooks/useHistory";

export const AISMap = () => {
  const { history, selectedMMSI, setSelectedMMSI } = useAISContext();
  useAuth();
  useHistory();
  const positions = useAisData();
  return (
    <MapContainer center={[65.76, 7.52]} zoom={5} className="map">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {Object.values(positions).map(
        (pos) =>
          pos.latitude &&
          pos.longitude && (
            <Marker
              key={pos.mmsi}
              position={[pos.latitude, pos.longitude]}
              opacity={selectedMMSI !== null && selectedMMSI !== pos.mmsi ? 0.2 : 1}
              icon={
                new Icon({
                  iconUrl: "boat.png",
                  attribution:
                    '&copy; <a href="https://www.flaticon.com/">FlatIcon.com</a>',
                  iconSize: [25, 25],
                })
              }
              eventHandlers={{
                'popupopen': () => setSelectedMMSI(pos.mmsi),
                'popupclose': () => setSelectedMMSI(null),
              }}
            >
              <Popup>
                {pos.vesselName && (
                  <>
                    {pos.vesselName}
                    {pos.callsign && ` (${pos.callsign})`}
                    <br />
                    {pos.destination && (
                      <>
                        Destination: {pos.destination}
                        <br />
                      </>
                    )}
                  </>
                )}
                MMSI: {pos.mmsi}
                <br />
                {pos.trueHeading !== undefined && (
                  <>
                    Heading: {pos.trueHeading}°<br />
                  </>
                )}
                {pos.speedOverGround !== undefined && (
                  <>
                    Speed: {pos.speedOverGround} knots
                    <br />
                  </>
                )}
                {pos.msgtime && (
                  <>
                    Timestamp: {new Date(pos.msgtime).toLocaleString()}
                    <br />
                  </>
                )}
              </Popup>
            </Marker>
          ),
      )}
      {history.length > 0 && (
        <Polyline
          positions={history}
          color="blue"
          weight={2}
        />
      )}
    </MapContainer>
  );
};
