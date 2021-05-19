import * as types from "../constants/ActionTypes";

var initState = {};
var products = (state = initState, action) => {
  switch (action.type) {
    case types.GET_PRODUCT:
      return action.product;
    default:
      return state;
  }
};

export default products;
