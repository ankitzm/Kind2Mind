import React from "react";
import "./Playlist.css";
import Heading from "./../Heading/Heading"
import VideoCard from "./VideoCard/VideoCard";

const Playlist = () => {
  return (
<div className="pcl" id="playlist">

<Heading title="Our Curated Playlist for you" />

    <div className="playlist-container">

<div className="heading">Meditate</div>

<div className="video">
<VideoCard url="https://www.youtube.com/embed/y7e-GC6oGhg?list=PLed9ILr_V6XCNlOdrBLBEhEXTQndkvzA-" />
<VideoCard url="https://www.youtube.com/embed/xdfs4Bo3-Yw?list=PLed9ILr_V6XDTsTvce_MTzGLehZH2e9H7" />
<VideoCard url="https://www.youtube.com/embed/EwQkfoKxRvo?list=PLed9ILr_V6XDTsTvce_MTzGLehZH2e9H7" />
<VideoCard url="https://www.youtube.com/embed/KxgD9En6Vso?list=PLed9ILr_V6XDTsTvce_MTzGLehZH2e9H7" />
<VideoCard url="https://www.youtube.com/embed/Lju6h-C37hE?list=PLed9ILr_V6XDTsTvce_MTzGLehZH2e9H7" />
<VideoCard url="https://www.youtube.com/embed/cFfP7N8wpMA?list=PLed9ILr_V6XDTsTvce_MTzGLehZH2e9H7" />
</div>
  
  
  </div>

  <div className="playlist-container">

<div className="heading">Get Relaxed</div>

    <div className="video">

    <VideoCard url="https://www.youtube.com/embed/TKqv5ekBjI0?list=PLed9ILr_V6XCNlOdrBLBEhEXTQndkvzA-" />
    <VideoCard url="https://www.youtube.com/embed/fBVJoIbNjdQ?list=PLed9ILr_V6XCNlOdrBLBEhEXTQndkvzA-" />
    <VideoCard url="https://www.youtube.com/embed/y7e-GC6oGhg" />
    <VideoCard url="https://www.youtube.com/embed/36YnV9STBqc?list=PLed9ILr_V6XCSvxHqojdFjiANqrlQLXS6" />
    <VideoCard url="https://www.youtube.com/embed/1itSqkbXIlU?list=PLed9ILr_V6XA2DcPIcD7tOEmTc-0TSuBZ" />
    <VideoCard url="https://www.youtube.com/embed/T52rBA2wh74?list=PLed9ILr_V6XCSvxHqojdFjiANqrlQLXS6" />

    </div>
  
  
  </div>




</div >
  );
};

export default Playlist;
