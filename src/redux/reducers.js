// import NAME_ACTIONS from "./constants";

const initialState = {
  all: [],
  selected: null,
};

const delivery = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DELIVERIES":
      console.log({ action });
      return Object.assign({}, state, {
        all: state.all.concat(action.deliveries),
      });
    case "TO_SELECT_DELIVERY":
      return {
        ...state,
        selected: action.delivery,
      };
    default:
      return state;
  }
};

export default delivery;
