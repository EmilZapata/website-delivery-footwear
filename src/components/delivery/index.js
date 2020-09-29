import React from "react";

import { useStoreActions } from "easy-peasy";

export default function Delivery({ listTask = [] }) {
  // Actions to EasyPeasy
  const _actionSelectTask = useStoreActions(
    (state) => state.taskDelivery.selectTask
  );
  return (
    <>
      <div className="delivery-root">
        {listTask.map((task, index) => (
          <div
            key={index}
            className="delivery-task"
            onClick={() => _actionSelectTask(task)}
          >
            Prueba
          </div>
        ))}
      </div>
      <style jsx>{`
        .delivery-root {
          padding-bottom: 20px;
        }
        .delivery-task {
          height: 50px;
          border: 1px solid yellow;
          border-radius: 10px;
          margin-top: 10px;
        }
      `}</style>
    </>
  );
}
