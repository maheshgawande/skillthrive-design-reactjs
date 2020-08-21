import React from "react";

import "Styles/main.css";

import MainHeader from "Components/SubComponent/Main/MainHeader";
import MainComponent from "./MainCompnent";
import PopularGames from "Components/SubComponent/Main/PopularGames";
import TopChannels from "Components/SubComponent/Main/TopChannels";
import Trending from "Components/SubComponent/Main/Trending";

function Main() {
  return (
    <div className="main-container">
      <MainHeader />
      <MainComponent headerTitle="popular games" body={<PopularGames />} />
      <MainComponent headerTitle="top channels" body={<TopChannels />} />
      <MainComponent headerTitle="trending" body={<Trending />} />
    </div>
  );
}

export default Main;
