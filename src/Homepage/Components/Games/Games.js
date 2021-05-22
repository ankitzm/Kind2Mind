import React, { useState } from "react";
import "./Games.css";

import Start from "./Quiz/Start";
import Quiz from "./Quiz/Quiz";
import Heading from "../Heading/Heading";

function Games() {
  const [start, setStart] = useState(false);

  return (
    <div className="game-container" id="game">
      <Heading title="Our Games" />

      <div className="game">
        <div className="quiz">
          {start ? <Quiz /> : <Start props={setStart} />}
        </div>
      </div>
    </div>
  );
}

export default Games;
