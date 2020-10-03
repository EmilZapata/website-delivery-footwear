import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Deliveries from "../../components/deliveries";
import MapLeafLet from "../../components/map-leaflet";
import DateFake from "./fake-data.json";
import { addDeliveries } from "../../redux/actions";
import "./index.scss";
import ModalLoadData from "../../components/modal/modalLoadData";

const PageHome = ({ delivery, actionAddDeliveries }) => {
  const [showModal, setShowModal] = useState(false);
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

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  console.log({ delivery });
  return (
    <main>
      <section className="sectionDeliveries">
        <Deliveries listTask={delivery.all} />
        <div className="loadingDataDeliveries">
          <button onClick={() => handleShowModal()}>
            Cargar Data <i class="fa fa-file-excel-o" aria-hidden="true"></i>
          </button>
        </div>
      </section>
      <section className="sectionMapLeafLet">
        <MapLeafLet
          deliveries={delivery.all}
          selected={delivery.selected ? delivery.selected : null}
        />
      </section>
      {showModal && <ModalLoadData onClose={handleShowModal} />}
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
