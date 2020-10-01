import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Deliveries from "../../components/deliveries";
import MapLeafLet from "../../components/map-leaflet";
import DateFake from "./fake-data.json";

import "./index.scss";

const PageHome = () => {
  const [dataDeliveries, setDataDeliveries] = useState([]);

  useEffect(() => {
    setDataDeliveries(
      DateFake.map((data) => ({
        position: {
          lng: data.geometry.coordinates[0],
          lat: data.geometry.coordinates[1],
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
};

const mapStateToProps = (state) => {
  return {
    // todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onTodoClick: (id) => {
    //   dispatch(toggleTodo(id));
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageHome);
