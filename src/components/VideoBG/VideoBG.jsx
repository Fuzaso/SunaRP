import React from "react";
import SunaMP4 from "../../assets/videos/suna.mp4";

function VideoBG() {
  return (
    <div className="video-bg">
        <video autoPlay loop muted playsInline>
            <source src={SunaMP4} type="video/mp4" />
        </video>
        <div className="overlay-text"></div>
    </div>
  );
}

export default VideoBG;