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

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Games />
      <Playlist />
      <Meet />
      <Note />
      <Suggestion />
      <CreatedBy />

    </div>
  );
}

export default App;
