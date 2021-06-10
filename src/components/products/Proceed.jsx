import React from "react";
import Order from "./Order";
import priceSymbol from "./priceSymbol";

function Proceed(props) {
  let content = null;

  if (props.orders.length > 0) {
    let totalPrice = props.orders.reduce(
      (accum, order) => accum + order.count * order.price,
      0
    );
    content = (
      <div className="proceed">
        <div>
          <h4>{priceSymbol(totalPrice)}</h4>
        </div>
        <button className="btn btn-primary">Proceed</button>
      </div>
    );
  }

  return (
    <div>
      {props.orders.map((order) => {
        return (
          <Order key={order.id} order={order} removeOrder={props.removeOrder} />
        );
      })}

      {content}
    </div>
  );
}

export default Proceed;
