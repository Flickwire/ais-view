import { Polyline } from "react-leaflet/Polyline";
import { useAISContext } from "../hooks/AISContext";
import { useHistory } from "../hooks/useHistory";

export const VesselHistory = () => {
  useHistory();
  const { history } = useAISContext();
  if (history.length === 0) return null;
  return <Polyline positions={history} color="blue" weight={2} />;
};
