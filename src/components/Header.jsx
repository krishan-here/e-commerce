import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="custom-header">
      <div>Amezo</div>
      <div className="user-info">
        <div>sign in</div>
        <div className="cart">
          <FontAwesomeIcon icon={faShoppingBag} />
          <div className="cart-items">2</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
