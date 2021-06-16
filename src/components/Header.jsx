import React from "react";

function Header(props) {
  return (
    <div className="custom-header">
      <div onClick={props.goHome} className="amezo"></div>
      <div className="user-info">
        <div>sign in</div>
      </div>
    </div>
  );
}

export default Header;
