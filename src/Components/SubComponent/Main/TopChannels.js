import React from "react";

import TopChannelsComponent from "Components/Layout/Main/ComponentBody/TopChannelsComponent";

const bgColors = ["orange", "purple", "green", "pink"];

function getRandomColor() {
  const randNum = Math.floor(Math.random() * 4);
  return bgColors[randNum];
}

function TopChannels() {
  return (
    <div className="component-body top-channels">
      <TopChannelsComponent
        name="alex raftelona"
        followerCount="5946"
        bgColor={getRandomColor()}
        online
      />
      <TopChannelsComponent
        name="keyjane tricia"
        followerCount="5412"
        bgColor={getRandomColor()}
      />
      <TopChannelsComponent
        name="one esport"
        followerCount="7410"
        bgColor={getRandomColor()}
      />
      <TopChannelsComponent
        name="Catarina Dante"
        followerCount="9630"
        bgColor={getRandomColor()}
      />
      <TopChannelsComponent
        name="justin foley"
        followerCount="1254"
        bgColor={getRandomColor()}
        online
      />
    </div>
  );
}

export default TopChannels;
