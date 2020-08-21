import React from "react";
import ComponentHeader from "Components/Layout/Main/ComponentHeader";

function MainComponent({ headerTitle, body }) {
  return (
    <div className="main-component">
      <ComponentHeader title={headerTitle} />
      {body}
    </div>
  );
}

export default MainComponent;
