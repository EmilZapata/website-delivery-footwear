import React from "react";
import { ZoomControl, Map, TileLayer } from "react-leaflet";
// import { useStoreState } from "easy-peasy";
import "./index.scss";
import Markets from "./merkers";

const MapLeafLet = ({
  deliveries = [],
  selected = { position: { lat: "-11.975014", lng: "-76.998674" } },
}) => {
  const defaultPosition = {
    lat: "-11.975014",
    lng: "-76.998674",
  };
  return (
    <div className="map-root">
      <Map
        center={selected ? selected.position : defaultPosition}
        zoom={16}
        zoomControl={false}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="topright" />
        <Markets tasks={deliveries} />
      </Map>
    </div>
  );
};

export default MapLeafLet;
