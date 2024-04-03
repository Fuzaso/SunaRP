import React, { useState } from "react";
import UraharaMP4 from "../../assets/videos/urahara.mp4";

function VideoUrahara() {
  const [muted, setMuted] = useState(true);

  const handleMute = () => {
    setMuted(!muted);
  };

  return (
    <div className="video-urahara">
        <video autoPlay loop playsInline muted={muted}>
            <source src={UraharaMP4} type="video/mp4" />
        </video>
        <div className="overlay-text"></div>
        <button onClick={handleMute}>
          {muted ? "Activer le son" : "Couper le son"}
        </button>
    </div>
  );
}

export default VideoUrahara;