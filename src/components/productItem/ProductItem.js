import React, { Component } from "react";
import { Link } from "react-router-dom";


class ProductItem extends Component {
  onDelete = (id) => {
    if (confirm("Are you sure to delete this item ?")) { //eslint-disable-line
      this.props.onDelete(id)
    }
    
  };
  render() {
    var { product, index } = this.props;
    var statusName = product.status ? "Còn hàng" : "Hết hàng";
    var statusClass = product.status
      ? "label label-warning"
      : "label label-default";
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={statusClass}>{statusName}</span>
        </td>
        <td>
          <Link to={`/product/${product.id}/edit`} className="btn btn-success mr-10">
            Edit
          </Link>

          <button
            type="button"
            className="btn btn-danger"
            onClick={this.onDelete.bind(this, product.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
