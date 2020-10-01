import React from "react";

import { useEffect } from "react";
import { Marker, Popup } from "react-leaflet";
import IconLocation from "./iconLocation";

export default function Markets({ tasks = [] }) {
  useEffect(() => {
    // delete L.Icon.Default.prototype._getIconUrl;
    // L.Icon.Default.mergeOptions({
    //   iconRetinaUrl: Icon,
    //   iconUrl: Icon,
    //   shadowUrl: Icon,
    // });
  }, []);
  return (
    <>
      {tasks.map((task, index) => (
        <Marker position={task.position} key={index} icon={IconLocation}>
          <Popup>Prueba popup</Popup>
        </Marker>
      ))}
    </>
  );
}
