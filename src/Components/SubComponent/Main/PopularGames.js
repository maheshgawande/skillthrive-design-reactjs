import React from "react";

import PopularGamesComponent from "Components/Layout/Main/ComponentBody/PopularGamesComponent";

import apexLegendImg from "Assets/game_characters/apex_legend.png";
import overwatchImg from "Assets/game_characters/overwatch.png";
import valorantImg from "Assets/game_characters/valorant.png";
import dotaImg from "Assets/game_characters/dota2.png";
import fortniteImg from "Assets/game_characters/fortnite.png";
import godOfWarImg from "Assets/game_characters/god_of_war.png";
import lolImg from "Assets/game_characters/lol.png";
import pubgImg from "Assets/game_characters/pubg.png";
import avengerImg from "Assets/game_characters/avengers.png";

function PopularGames() {
  return (
    <div className="component-body popular-games">
      <PopularGamesComponent
        imgSrc={apexLegendImg}
        gameTitle="apex legend"
        viewsCount={1000}
        bgColorHex="556573"
      />
      <PopularGamesComponent
        imgSrc={overwatchImg}
        gameTitle="overwatch"
        viewsCount={5000}
        bgColorHex="3199ee"
      />
      <PopularGamesComponent
        imgSrc={valorantImg}
        gameTitle="valorant"
        viewsCount={6000}
        bgColorHex="EB9B54"
      />
      <PopularGamesComponent
        imgSrc={dotaImg}
        gameTitle="dota 2"
        viewsCount={2500}
        bgColorHex="8F6DA6"
      />
      <PopularGamesComponent
        imgSrc={fortniteImg}
        gameTitle="fortnite"
        viewsCount={7000}
        bgColorHex="B46A39"
      />
      <PopularGamesComponent
        imgSrc={godOfWarImg}
        gameTitle="god of war"
        viewsCount={6400}
        bgColorHex="4C4135"
      />
      <PopularGamesComponent
        imgSrc={lolImg}
        gameTitle="league of legends"
        viewsCount={5420}
        bgColorHex="BF726B"
      />
      <PopularGamesComponent
        imgSrc={pubgImg}
        gameTitle="playerunknown's battlegrounds"
        viewsCount={8412}
        bgColorHex="3D393F"
      />
      <PopularGamesComponent
        imgSrc={avengerImg}
        gameTitle="avengers"
        viewsCount={6514}
        bgColorHex="1F252D"
      />
    </div>
  );
}

export default PopularGames;
