import React from "react";

// import { useStoreActions } from "easy-peasy";
import './index.scss'

export default function Deliveries({ listTask = [] }) {
  // Actions to EasyPeasy
  // const _actionSelectTask = useStoreActions(
  //   (state) => state.taskDelivery.selectTask
  // );
  return (
    <div className="delivery-root">
      {listTask.map((task, index) => (
        <div
          key={index}
          className="delivery-task"
          onClick={() => {
            console.log({ task });
          }}
        >
          Prueba
        </div>
      ))}
    </div>
  );
}
