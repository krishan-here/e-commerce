import React from "react";
import Order from "./Order";

function Proceed(props) {
  return (
    <div>
      {props.orders.map((order) => {
        return (
          <Order
            key={order.id}
            id={order.id}
            image={order.image}
            title={order.title}
            price={order.price}
            removeOrder={props.removeOrder}
          />
        );
      })}

      <div className="proceed">
        <div>
          <h4>$ 1000</h4>
        </div>
        <button className="btn btn-primary">Proceed</button>
      </div>
    </div>
  );
}

export default Proceed;
