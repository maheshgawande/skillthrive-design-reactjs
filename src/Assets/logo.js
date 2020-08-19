import React from "react";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <div className="logo">
      <NavLink to="/home">
        <span style={{ fontSize: `${2.5}em`, color: "skyblue" }}>X</span>
      </NavLink>
    </div>
  );
}

export default Logo;
