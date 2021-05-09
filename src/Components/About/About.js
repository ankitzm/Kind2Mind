import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>



      <div className="nav" id="about">
      <ul>
      <li><a href="#game">Games</a></li>
      <li><a href="#playlist">Playlist</a></li>
      <li><a href="#meet">Meet</a></li>
      <li><a href="#note">Notes</a></li>
    </ul>
      </div>
    <div className="about">


      <h1>WHAT IS MENTAL HEALTH ?</h1>
      <p>
        Mental health includes our emotional, psychological, and social
        well-being. It affects how we think, feel, and act. It also helps
        determine how we handle stress, relate to others, and make choices.
        Mental health is important at every stage of life, from childhood and
        adolescence through adulthood.{" "}
      </p>
      <p>
        Over the course of your life, if you experience mental health problems,
        your thinking, mood, and behavior could be affected. Many factors
        contribute to mental health problems, including: Biological factors,
        such as genes or brain chemistry Life experiences, such as trauma or
        abuse Family history of mental health problems.
      </p>

      
    </div>
    </div>
  );
};

export default About;
