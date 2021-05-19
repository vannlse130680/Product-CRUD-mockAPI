import * as types from "../constants/ActionTypes";

var initState = [];
var editingProduct = (state = initState, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      state = action.products;
      return [...state];
    case types.DELETE_PRODUCT:
      var index2 = findIndex(state, action.id);
      if (index2 !== -1) {
        state.splice(index2, 1);
      }

      return [...state];
    case types.ADD_PRODUCT:
      state.push(action.product);

      return [...state];
    case types.UPDATE_PRODUCT:
      var index1 = findIndex(state, action.product.id);
      if (index1 !== -1) {
        state[index1] = action.product;
      }

      return [...state];
    default:
      return [...state];
  }
};
var findIndex = (products, id) => {
  var index = -1;
  if (products.length > 0) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        index = i;
        break;
      }
    }
  }
  return index;
};
export default editingProduct;
