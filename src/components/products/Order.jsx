import React from "react";

function Order(props) {
  return (
    <div className="order-section">
      <div className="order-img">
        <img
          src="https://m.media-amazon.com/images/I/61ihz46SLOL._AC_UY327_FMwebp_QL65_.jpg"
          alt="image"
        />
      </div>
      <div>
        <div className="title">
          <p>Boult Audio Bass wireless</p>
        </div>

        <div className="price-remove">
          <div>1×$500</div>
          <button className="btn btn-danger btn-sm">remove</button>
        </div>
      </div>
    </div>
  );
}

export default Order;
