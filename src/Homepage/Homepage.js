import React from "react";
import "./Homepage.css";
import Games from "./Components/Games/Games";
import About from "./Components/About/About";
import CreatedBy from "./Components/CreatedBy/CreatedBy";
import Landing from "./Components/Landing/Landing";
import Nav from "./Components/Nav/Nav";
import Playlist from "./Components/Playlist/Playlist";
import Note from "./Components/Note/Note";

import Suggestion from "./Components/Suggestion/Suggestion";
import Nav2 from "./Components/nav2/nav2";
import Form from "./Components/Form/Form";

function Homepage() {
  return (
    <div className="Homepage">
      <Nav />
      <Landing />
      <Nav2 />
      <About />
      <Form />
      <Games />
      <Playlist />
      <Note />
      <Suggestion />
      <CreatedBy />
    </div>
  );
}

export default Homepage;