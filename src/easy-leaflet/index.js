import { createStore, action } from "easy-peasy";

const taskDelivery = {
  allTask: [],
  selectedTask: null,
  addTasks: action((state, payload) => {
    state.allTask = state.allTask.concat(payload);
  }),
  selectTask: action((state, payload) => {
    state.selectedTask = payload;
  }),
};

const counter = {
  count: 0,
  increment: action((state) => {
    state.count++;
  }),
  decrement: action((state) => {
    state.count--;
  }),
  reset: action((state) => {
    state.count = 0;
  }),
};

const store = {
  counter,
  taskDelivery,
};

export default store;

export function initializeStore(initialState) {
  return createStore(store, initialState);
}
