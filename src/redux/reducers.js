import NAME_ACTIONS from "./constants";

const initialState = {};

const delivery = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DELIVERIES":
      console.log(action);
      break;
    case "TO_SELECT_DELIVERY":
      console.log(action);
      break;
    default:
      return state;
  }
};

export default delivery;
