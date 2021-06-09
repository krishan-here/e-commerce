import React, { useEffect, useState } from "react";

function Item(props) {
  const title = props.title;
  const [dot, setDot] = useState("");
  useEffect(() => {
    if (title.length > 50) {
      setDot("...");
    } else {
      setDot("");
    }
  });

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={props.img}
        alt="Card image cap"
        style={{ height: "300px" }}
      />
      <div className="card-body" style={{ height: "100px" }}>
        <h5 className="card-title">{title.substr(0, 50) + dot}</h5>
      </div>
      <div className="card-body price-cart">
        <h4 className="card-text">${props.price}</h4>
        <button className="btn btn-warning">Add to Cart</button>
      </div>
    </div>
  );
}

export default Item;
