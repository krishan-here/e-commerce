import React from "react";
import concate from "./concate";
import priceSymbol from "./priceSymbol";

function Order(props) {
  return (
    <div className="order-section">
      <div className="order-img">
        <img src={props.image} alt={props.title} />
      </div>
      <div>
        <div className="title">
          <p>{concate(props.title)}</p>
        </div>

        <div className="price-remove">
          <div>{priceSymbol(props.price)}</div>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => props.removeOrder(props.id)}
          >
            remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default Order;
