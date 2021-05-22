import React from "react";
import "./VideoCard.css";

const VideoCard = ({url}) => {
    return(
        <div className="video-card">
        <iframe
 
 src={url}
 title="YouTube video player"
 frameBorder="0"
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
 allowFullScreen
      ></iframe>

        </div>

    )
}

export default VideoCard;