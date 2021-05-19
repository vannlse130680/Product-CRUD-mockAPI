import React, { Component } from "react";

class NotFound extends Component {
  render() {
    return (
      <div>
        <div className="alert alert-warning">
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-hidden="true"
          >
            &times;
          </button>
          <strong>
            <h1>404 Not found page</h1>
          </strong>{" "}
          
        </div>
      </div>
    );
  }
}

export default NotFound;
