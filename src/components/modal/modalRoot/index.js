import React from "react";
import ReactDOM from "react-dom";

const ModalRoot = ({ children }) => {
  return ReactDOM.createPortal(children, document.getElementById("root-modal"));
};

export default ModalRoot;
