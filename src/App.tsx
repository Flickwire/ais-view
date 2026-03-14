import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import './App.css'
import { useAisData } from './useAisData';
import { Icon } from 'leaflet';

function App() {
  const positions = useAisData();
  return (
    <div className="App">
    <MapContainer center={[65.76, 7.52]} zoom={5} className='map'>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {Object.values(positions).map((pos) => (
        <Marker key={pos.mmsi} position={[pos.latitude, pos.longitude]} icon={new Icon({ iconUrl: 'boat.png', attribution: '&copy; <a href="https://www.flaticon.com/">FlatIcon.com</a>', iconSize: [25, 25] })}>
          <Popup>
            MMSI: {pos.mmsi}<br />
            Heading: {pos.trueHeading}°<br />
            Speed: {pos.speedOverGround} knots<br />
            Timestamp: {new Date(pos.msgtime).toLocaleString()}<br />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    </div>
  )
}

export default App
