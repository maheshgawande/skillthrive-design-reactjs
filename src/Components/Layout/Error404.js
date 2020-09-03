import React from "react";

import { NavLink } from "react-router-dom";

import "Styles/error404.css";

function Error404() {
  return (
    <div className="error404-container">
      <div className="error404">
        <h2>Looks like you have lost</h2>
        <h4>
          Got to <NavLink to="/">HomePage</NavLink>
        </h4>
      </div>
    </div>
  );
}

export default Error404;
