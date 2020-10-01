import NAME_ACTION from "./constants";
import NAME_ACTIONS from "./constants";

export const addDeliveries = (deliveries = []) => ({
  type: NAME_ACTION.ADD_DELIVERIES,
  deliveries,
});

export const toSelectDelivery = (delivery = {}) => ({
  type: NAME_ACTION.TO_SELECT_DELIVERY,
  delivery,
});
