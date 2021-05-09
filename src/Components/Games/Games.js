import React, { useState } from "react";
import Snake from 'react-simple-snake'
import "./Games.css";

import Start from './Quiz/Start'
import Quiz from './Quiz/Quiz'


function Games () {

    const [start, setStart] = useState(false);

    return (
        <div className="game-container" id="game">

            <div className="heading">Our Games</div>

        <div className="game">


            <div className="quiz">
                { start ? <Quiz /> : <Start props={setStart} />} 
            </div>
            <Snake />

        </div>
    </div>
    )
}

export default Games;