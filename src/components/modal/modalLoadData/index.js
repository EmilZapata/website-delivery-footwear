import React from "react";
import "./index.scss";
import ModalRoot from "../modalRoot";

const ModalLoadData = ({ onClose }) => {
  return (
    <ModalRoot>
      <div className="modalLoadData-container">
        <div className="card">
          <div className="card-title">
            <p>Cargar el Excel de tus Deliverys</p>
            <i
              class="fa fa-times fa-2x"
              aria-hidden="true"
              onClick={onClose}
            ></i>
          </div>
          <div className="card-body">body</div>
        </div>
      </div>
    </ModalRoot>
  );
};

export default ModalLoadData;
