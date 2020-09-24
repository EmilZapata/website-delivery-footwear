import { createStore } from "easy-peasy";

const modelDelivery = {
  items: { 1: { id: 1, name: "Peas", price: 10 } },
};

const storeModel = {
  deliveries: modelDelivery,
};

export const makeStore = (updatedState, options) => {
  const store = createStore(storeModel, { initialState: updatedState });
  return store;
};
