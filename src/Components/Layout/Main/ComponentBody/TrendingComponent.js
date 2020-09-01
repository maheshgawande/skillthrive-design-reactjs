import React, { useState, useRef, useEffect } from "react";

import PlayCircleFilled from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilled from "@material-ui/icons/PauseCircleFilled";

import VideoSrc from "Assets/videos/video.mp4";

const iconSize = {
  largeIcon: {
    width: 60,
    height: 60,
  },
};

function TrendingComponent() {
  const [playing, setPlaying] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const vidRef = useRef();

  useEffect(() => {
    controlVid();
  }, [playing]);

  function controlVid() {
    console.log(vidRef);
    playing ? vidRef.current.play() : vidRef.current.pause();
  }

  return (
    <div className="component trending">
      <div
        className={`video-player ${playing ? "playing" : "pause"}`}
        onClick={() => setPlaying(!playing)}
        onMouseEnter={() => setOverlay(true)}
        onMouseLeave={() => setOverlay(false)}
      >
        <div className={`overlay ${overlay ? "show" : "hide"}`}></div>
        <div className="control-button">
          <i>
            {playing ? (
              <PauseCircleFilled
                className={`${overlay ? "show" : "hide"}`}
                style={iconSize.largeIcon}
              />
            ) : (
              <PlayCircleFilled style={iconSize.largeIcon} />
            )}
          </i>
        </div>
        <video ref={vidRef} src={VideoSrc}></video>
      </div>
    </div>
  );
}

export default TrendingComponent;
