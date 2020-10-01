import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Deliveries from "../../components/deliveries";
import MapLeafLet from "../../components/map-leaflet";
import DateFake from "./fake-data.json";
import { addDeliveries } from "../../redux/actions";
import "./index.scss";

const PageHome = ({ delivery, actionAddDeliveries }) => {
  useEffect(() => {
    actionAddDeliveries(
      DateFake.map((data) => ({
        position: {
          lng: data.geometry.coordinates[0],
          lat: data.geometry.coordinates[1],
        },
      }))
    );
  }, []);

  return (
    <main>
      <section className="sectionDeliveries">
        <Deliveries listTask={delivery.all} />
      </section>
      <section className="sectionMapLeafLet">
        <MapLeafLet deliveries={delivery.all} />
      </section>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    delivery: state.delivery,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionAddDeliveries: (deliveries) => dispatch(addDeliveries(deliveries)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageHome);
