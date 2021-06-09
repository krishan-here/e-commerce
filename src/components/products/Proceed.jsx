import React from "react";
import Order from "./Order";

function Proceed(props) {
  return (
    <div>
      <Order />
      <Order />
      <Order />
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
