import React from "react";
import "./Suggestion.css";

const Suggestion = () => {
  return (
    <div className="suggestion" id="suggestion">
      <h1>HOW TO LOOK AFTER YOUR MENTAL HEALTH ?</h1>
      <p>
        In the midst of managing a situation like the COVID-19 outbreak, it’s
        easy to feel overwhelmed and worried. Focusing on how to slow the spread
        of the virus is important for our physical health, however, identifying
        ways to manage our mental health is also crucial. 
        </p>
        <p>We may experience
        increased feelings of anxiety, powerlessness, impatience, irritability
        or frustration. We might also experience a sense of scarcity, or be
        concerned about increased stigmatization or xenophobia.
        We may feel uncertainty about the future or worry about isolation amidst rapidly
        changing schedules and social plans. While feeling worried is normal and
        expected, there are many ways we can increase our resilience during this
        time:
      </p>
      <p>
        <ul>
          <li>Take breaks from the news.</li>
          <li>Take care of your body.</li>
          <li>Plan for coping with a potentially sudden drop in social contact</li>
          <li>Create a new, adapted schedule taking cancellations into account.</li>
          <li>Write out all of your fears in a journal until your anxiety has dropped by half.</li>
        </ul>
      </p>
    </div>
  );
};

export default Suggestion;
