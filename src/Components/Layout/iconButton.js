import React from "react";
import { NavLink } from "react-router-dom";

function button({ svgIcon, toPath }) {
  return (
    <NavLink to={toPath} className="button">
      <i className="icon">{svgIcon}</i>
    </NavLink>
  );
}

export default button;
