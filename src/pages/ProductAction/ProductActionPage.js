import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import {
  actAddProductRequest,
  
  actGetProductRequest,
  actUpdateProductRequest,
} from "../../actions";




class ProductActionPage extends Component {
  state = {
    id: "",
    txtName: "",
    txtPrice: "",
    ckStatus: false,
  };
  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.onGetProduct(id);

      // this.setState({
      //   id: product.id,
      //   txtName: product.name,
      //   txtPrice: product.price,
      //   ckStatus: product.status,
      // });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.editingProduct) {
      var { editingProduct } = nextProps;
      console.log(nextProps);
      this.setState({
        id: editingProduct.id,
        txtName: editingProduct.name,
        txtPrice: editingProduct.price,
        ckStatus: editingProduct.status,
      });
    }
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };
  onSave = (event) => {
    var { txtName, txtPrice, ckStatus, id } = this.state;
    var { history } = this.props;
    var product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: ckStatus,
    };
    event.preventDefault();
    if (id) {
      //   callAPI(`products/${id}`, "PUT", {
      //     name: txtName,
      //     price: txtPrice,
      //     status: ckStatus,
      //   }).then((response) => {
      //     if (response.status === 200) {
      //       history.goBack();
      //     }
      //   });
      this.props.onUpdateProduct(product)
      history.goBack();
    } else {
      //   callAPI("products", "POST", {
      //     name: txtName,
      //     price: txtPrice,
      //     status: ckStatus,
      //   }).then((response) => {
      //     if (response.status === 201) {
      //       history.goBack();
      //     }
      //   });
      this.props.onAddProduct(product);
      history.goBack();
    }
  };
  render() {
    var { txtName, txtPrice, ckStatus } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <form onSubmit={this.onSave}>
              <div className="form-group">
                <label>Tên sản phẩm:</label>
                <input
                  type="text"
                  className="form-control"
                  name="txtName"
                  value={txtName}
                  onChange={this.onChange}
                  placeholder="Input field"
                />
              </div>
              <div className="form-group">
                <label>Giá:</label>
                <input
                  type="number"
                  value={txtPrice}
                  onChange={this.onChange}
                  className="form-control"
                  name="txtPrice"
                  placeholder="Input field"
                />
              </div>

              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    value={ckStatus}
                    checked={ckStatus}
                    name="ckStatus"
                    onChange={this.onChange}
                  />
                  Còn hàng
                </label>
              </div>

              <button type="submit" className="btn btn-primary mr-10">
                Submit
              </button>

              <Link to={"/productList"} className="btn btn-default">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { editingProduct: state.editingProduct };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProductRequest(product));
    },
    onGetProduct: (id) => {
      dispatch(actGetProductRequest(id));
    },
    onUpdateProduct: (product) => {
      dispatch(actUpdateProductRequest(product));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
