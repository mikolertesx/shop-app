import Order from "../../models/order";
import { ADD_ORDER } from "../actions/orders";

const initialState = {
  orders: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const { id, items, amount, date } = action.orderData;
      const newOrder = new Order(id, items, amount, date);
      return {
        ...state,
        orders: state.orders.concat(newOrder),
      };
  }
  return state;
};
