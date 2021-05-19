import React, { Component } from "react";
import ProductItem from "../../components/productItem/ProductItem";
import ProductList from "../../components/products/ProductList";
import { connect } from "react-redux";


import { Link } from "react-router-dom";

import { actDeleteProductsRequest,  actFetchProductsRequest } from "../../actions";

class ProductListPage extends Component {
  
  componentDidMount() {
    this.props.onFetchProduct();
  }
 
  onDelete = (id) => {
      console.log(id)
      this.props.onDeleteProducts(id)
    // var { products } = this.state;
    // callAPI(`products/${id}`, "DELETE", null).then((res) => {
    //   if (res.status === 200) {
    //     var index = this.findIndex(products, id);
    //     if (index !== -1) {
    //       products.splice(index, 1);
    //       this.setState({
    //         products: products,
    //       });
    //     }

    //     // this.setState({
    //     //   products: this.state.products.splice(this.findIndex(products, id), 1),
    //     // });
    //   }
    // });
  };
  render() {
    var products = this.props.products;

    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to={"/product/add"} className="btn btn-info mb-10">
          Add product
        </Link>

        <ProductList>{this.showProductList(products)}</ProductList>
      </div>
    );
  }
  showProductList = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            onDelete={this.onDelete}
            key={index}
            product={product}
            index={index}
          ></ProductItem>
        );
      });
    }
    return result;
  };
}
const mapStateToProps = (state) => {
  return { products: state.products };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchProduct: () => {
      dispatch(actFetchProductsRequest());
    },
    onDeleteProducts: (id) => {
        dispatch(actDeleteProductsRequest(id))
    }

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
