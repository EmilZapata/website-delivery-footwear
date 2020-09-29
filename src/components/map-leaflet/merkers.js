import React from "react";

import { useEffect } from "react";
import { Marker, Popup } from "react-leaflet";
// import IconLocation from "./iconLocation";
import L from "leaflet";
import Icon from "../../public/vercel.svg";

export default function Markets({ tasks = [] }) {
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: Icon,
      iconUrl: Icon,
      shadowUrl: Icon,
    });
  }, []);
  return (
    <>
      {tasks.map((task, index) => (
        <Marker position={task.position} key={index}>
          <Popup>Prueba popup</Popup>
        </Marker>
      ))}
    </>
  );
}
