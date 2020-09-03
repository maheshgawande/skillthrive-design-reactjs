import React from "react";

import ComponentHeader from "Components/Layout/Main/ComponentHeader";

function MainComponent({ headerTitle, body }) {
  return (
    <div className="main-component">
      <ComponentHeader title={headerTitle} />
      <div className="component-body-container">{body}</div>
    </div>
  );
}

export default MainComponent;
