import React from "react";

import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";

function ComponentHeader({ title }) {
  return (
    <div className="component-header">
      <div className="title">
        <p>{title}</p>
      </div>
      <div className="sliding-nav">
        <div className="left-arrow">
          <button>
            <i>
              <ChevronLeft />
            </i>
          </button>
        </div>
        <div className="right-arrow">
          <button>
            <i>
              <ChevronRight />
            </i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ComponentHeader;
