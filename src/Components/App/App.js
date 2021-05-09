import React from "react";
import Games from "../Games/Games";
import About from "../About/About";
import CreatedBy from "../CreatedBy/CreatedBy";
import Landing from "../Landing/Landing";
import Meet from "../Meet/Meet";
import Nav from "../Nav/Nav";
import Playlist from "../Playlist/Playlist";
import Note from "../Note/Note"


import './App.css';
import Suggestion from "../Suggestion/Suggestion";
import Contact from "../contact/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <About />
      <Games />
      <Playlist />
      <Meet />
      <Note />
      <Suggestion />
      <CreatedBy />
      <Contact />

      <div id='note'></div>
    </div>
  );
}

export default App;
