import React from "react";
import './App.css';
import Games from "../Games/Games";
import About from "../About/About";
import CreatedBy from "../CreatedBy/CreatedBy";
import Landing from "../Landing/Landing";
import Meet from "../Meet/Meet";
import Nav from "../Nav/Nav";
import Playlist from "../Playlist/Playlist";
import Note from "../Note/Note"


import Suggestion from "../Suggestion/Suggestion";
import Nav2 from "../nav2/nav2";

function App() {
  return (
    <div className="App">
      <Landing />
      <Nav2 />
      <About />
      <Games />
      <Playlist />
      <Meet />
      <Note />
      <Suggestion />
      <CreatedBy />
      <Nav />

    </div>
  );
}

export default App;
