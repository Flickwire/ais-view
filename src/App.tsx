import { MapContainer, TileLayer } from 'react-leaflet'
import './App.css'
import { useAisData } from './useAisData';

function App() {
  useAisData();
  return (
    <div className="App">
    <MapContainer center={[1, 0]} zoom={7} className='map'>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/**positions.map((pos, index) => (
        <Marker key={index} position={[pos.latitude, pos.longitude]}>
          <Popup>
            {pos.shipName} (MMSI: {pos.mmsi})<br />
            Heading: {pos.heading}°<br />
            Timestamp: {new Date(pos.timestamp).toLocaleString()}
          </Popup>
        </Marker>
      ))*/}
    </MapContainer>
    </div>
  )
}

export default App
