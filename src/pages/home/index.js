import React, { useEffect, useState } from "react";
import Deliveries from "../../components/deliveries";
import MapLeafLet from "../../components/map-leaflet";
import DateFake from "./fake-data.json";

import "./index.scss";

export default function PageHome() {
  const [dataDeliveries, setDataDeliveries] = useState([]);

  useEffect(() => {
    setDataDeliveries(
      DateFake.map((data) => ({
        position: {
          lat: data.geometry.coordinates[0],
          lng: data.geometry.coordinates[1],
        },
      }))
    );
  }, []);
  console.log({ DateFake });
  return (
    <main>
      <section className="sectionDeliveries">
        <Deliveries listTask={dataDeliveries} />
      </section>
      <section className="sectionMapLeafLet">
        <MapLeafLet deliveries={dataDeliveries} />
      </section>
    </main>
  );
}
