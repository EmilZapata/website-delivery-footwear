import React from "react";
import { connect } from "react-redux";
import "./index.scss";
import { toSelectDelivery } from "../../redux/actions";

const Deliveries = ({ listTask = [], actionToSelectDelivery }) => {
  const handleTask = (task) => {
    console.log("holi");
    actionToSelectDelivery(task);
  };

  return (
    <div className="delivery-root">
      {listTask.map((task, index) => (
        <div
          key={index}
          className="delivery-task"
          onClick={() => handleTask(task)}
        >
          <div className="delivery-task-name">ESPINOZA SÁNCHEZ</div>
          <div className="delivery-task-direction">
            MZ 74 LT 7 A.H. ENRIQUE MILLA OCHOA OF. 01, LOS OLIVOS 1530
          </div>
          <div className="delivery-task-button">
            <button
              onClick={() => {
                console.log("prueba");
              }}
            >
              Finalizar Delivery
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionToSelectDelivery: (delivery) => dispatch(toSelectDelivery(delivery)),
  };
};

export default connect(null, mapDispatchToProps)(Deliveries);
