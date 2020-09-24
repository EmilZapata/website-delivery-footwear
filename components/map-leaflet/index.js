import { useState } from "react";
import { ZoomControl, Map, TileLayer } from "react-leaflet";

export default function MapLeafLet() {
  const [position, setPosition] = useState({
    lat: "-11.975014",
    lng: "-76.998674",
  });
  return (
    <div className="map-root">
      <Map center={position} zoom={13} zoomControl={false}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="topright" />
      </Map>
      <style jsx>{`
        .map-root {
          height: 100%;
          width: 100%;
        }
      `}</style>
      <style jsx global>{`
        .leaflet-container {
          height: 100%;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
