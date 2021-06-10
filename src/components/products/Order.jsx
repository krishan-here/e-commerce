import React from "react";
import concate from "./concate";
import priceSymbol from "./priceSymbol";
import DeleteIcon from "@material-ui/icons/Delete";

function Order(props) {
  return (
    <div className="order-section row">
      <div className="order-img col-4">
        <img src={props.order.image} alt={props.order.title} />
      </div>
      <div className="col-8">
        <div className="title">
          <p>{concate(props.order.title, 20)}</p>
        </div>

        <div className="price-remove">
          <div>
            {priceSymbol(props.order.price)}x{props.order.count}
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
