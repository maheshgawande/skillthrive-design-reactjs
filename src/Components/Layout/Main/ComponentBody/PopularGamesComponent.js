import React from "react";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

function PopularGamesComponent({ imgSrc, gameTitle, viewsCount, bgColorHex }) {
  const bgColor = bgColorHex ? "#" + bgColorHex : "#3199ee";

  return (
    <div className="component" style={{ backgroundColor: bgColor }}>
      <div className="char-img">
        <img src={imgSrc} alt="apex legend" />
      </div>
      <div className="data">
        <i>
          <PlayCircleFilledIcon />
        </i>
        <p className="title">{gameTitle}</p>
        <p className="subtitle">{viewsCount} views</p>
      </div>
    </div>
  );
}

export default PopularGamesComponent;
