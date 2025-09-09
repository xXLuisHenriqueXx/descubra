import type { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export const Map = () => {
  const position: LatLngExpression = [-29.6868, -53.8149];

  return (
    <MapContainer
      className="w-full h-72 rounded-xl z-0"
      center={position}
      zoom={11}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
      />
      <Marker position={position}>
        <Popup>📍 Santa Maria - RS</Popup>
      </Marker>
    </MapContainer>
  );
};
