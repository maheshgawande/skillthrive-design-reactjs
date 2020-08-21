import React from "react";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

function MainHeader() {
  return (
    <div className="main-header-container">
      <div className="header-title">
        <p className="title">hello, alexa</p>
        <p className="subtitle">Welcome back to Xebec streaming platform</p>
      </div>
      <div className="stream-btn">
        <button>
          Start streaming
          <i>
            <PlayCircleFilledIcon />
          </i>
        </button>
      </div>
    </div>
  );
}

export default MainHeader;
