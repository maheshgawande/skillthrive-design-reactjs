import React from "react";

import "Styles/main.css";

import MainHeader from "Components/SubComponent/Main/MainHeader";

function Main() {
  return (
    <div className="main-container">
      <MainHeader />
      <div className="popular-games-container"></div>
      <div className="top-channels-container"></div>
      <div className="trending-container"></div>
    </div>
  );
}

export default Main;
