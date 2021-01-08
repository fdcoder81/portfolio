import React from "react";
import ReactPlayer from "react-player";
import "./reactPlayer.scss";

const ResponsivePlayer = ({ videoUrl }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={videoUrl}
        width="95%"
        height="95%"
        controls
      />
    </div>
  );
};

export default ResponsivePlayer;
