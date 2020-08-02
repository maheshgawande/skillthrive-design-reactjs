import React from "react";

function button({ svgIcon }) {
  return (
    <a href="#blank" className="button">
      <i className="icon">{svgIcon}</i>
    </a>
  );
}

export default button;
