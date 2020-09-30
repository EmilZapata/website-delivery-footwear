import React from "react";

import { useEffect, useState } from "react";
import { ZoomControl, Map, TileLayer } from "react-leaflet";
// import { useStoreState } from "easy-peasy";
import "./index.scss";
import Markets from "./merkers";

export default function MapLeafLet({ deliveries = [] }) {
  const [position, setPosition] = useState({
    lat: "-11.975014",
    lng: "-76.998674",
  });

  // State to Store EasyPeasy
  // const allTaskDelivery = useStoreState((state) => state.taskDelivery.allTask);
  // const selectedTask = useStoreState(
  //   (state) => state.taskDelivery.selectedTask
  // );
  // Actions to EasyPeasy

  // useEffect(() => {
  //   if (selectedTask) {
  // setPosition(selectedTask.position);
  //   }
  // }, [selectedTask]);

  return (
    <div className="map-root">
      <Map center={position} zoom={16} zoomControl={false}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="topright" />
        <Markets tasks={deliveries} />
      </Map>
      {/* <style jsx>{`
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
      `}</style> */}
    </div>
  );
}
