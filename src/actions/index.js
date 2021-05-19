import * as types from "../constants/ActionTypes";
import callAPI from "../ulties/APIcaller";
export const actFetchProductsRequest = () => {
  return (dispatch) => {
    callAPI("products", "GET", null).then((response) => {
      dispatch(actFetchProducts(response.data));
    });
  };
};
export const actFetchProducts = (products) => {
  return {
    type: types.FETCH_PRODUCTS,
    products,
  };
};

export const actDeleteProductsRequest = (id) => {
  return (dispatch) => {
    callAPI(`products/${id}`, "DELETE", null).then((response) => {
      dispatch(actDeleteProducts(response.data.id));
    });
  };
};
export const actDeleteProducts = (id) => {
  return {
    type: types.DELETE_PRODUCT,
    id,
  };
};

export const actAddProductRequest = (product) => {
  return (dispatch) => {
    callAPI("products", "POST", product).then((response) => {
      if (response.status === 201) {
        dispatch(actAddProduct(response.data));
        console.log("dad");
      }
    });
  };
};
export const actAddProduct = (product) => {
  return {
    type: types.ADD_PRODUCT,
    product,
  };
};

export const actGetProductRequest = (id) => {
  return (dispatch) => {
    callAPI(`products/${id}`, "GET", null).then((response) => {
      dispatch(actGetProduct(response.data));
    });
  };
};
export const actGetProduct = (product) => {
  return {
    type: types.GET_PRODUCT,
    product,
  };
};

export const actUpdateProductRequest = (product) => {
  return (dispatch) => {
    callAPI(`products/${product.id}`, "PUT", product).then((response) => {
      dispatch(actUpdateProduct(response.data));
    });
  };
};
export const actUpdateProduct = (product) => {
  return {
    type: types.UPDATE_PRODUCT,
    product,
  };
};