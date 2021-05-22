import React from "react";
import "./App.css";
import Homepage from "../Homepage/Homepage";
import VideoCall from "../VideoCall/VideoCall"

import  { Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
        <Route exact path="/" component={Homepage} />
        <Route exact path="/VideoCall" component={VideoCall} />
    </div>
  );
}

export default App;
