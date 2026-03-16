import { Polyline } from "react-leaflet/Polyline";
import { useHistory } from "../hooks/useHistory";

export const VesselHistory = () => {
  const history = useHistory();
  if (history.length === 0) return null;
  return <Polyline positions={history} color="blue" weight={2} />;
};
