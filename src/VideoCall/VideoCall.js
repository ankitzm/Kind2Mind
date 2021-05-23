import React from 'react'
import Jitsi from 'react-jitsi'
import "./VideoCall.css"

const VideoCall = () => (
  <div className="video-call">
    <h2>Meeting in progress</h2>
    <Jitsi containerStyle={{ width: '90vw', height: '85vh', margin: "40px 0px", padding:'20px', backgroundColor: 'rgba(255, 255, 255, 0.426)', backdropFilter: 'blur(2px)'}}/>
  </div>
)

export default VideoCall;