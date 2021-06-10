import React from "react";
import concate from "./concate";
import priceSymbol from "./priceSymbol";
import DeleteIcon from "@material-ui/icons/Delete";

function Order(props) {
  return (
    <div className="order-section">
      <div className="order-img">
        <img src={props.order.image} alt={props.order.title} />
      </div>
      <div>
        <div className="title">
          <p>{concate(props.order.title)}</p>
        </div>

        <div className="price-remove">
          <div>
            {props.order.count}×{priceSymbol(props.order.price)}
          </div>
          <DeleteIcon
            className="deleteIcon"
            onClick={() => props.removeOrder(props.order.id)}
          />
        </div>
      </div>
    </div>
  );
}

export default Order;
