import React from "react";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

import Form from "./Form/Form"
import "./Meet.css";


const Meet = () => {
    return(
        <div className="meet-container" id="meet">
            <Form />
        </div>
    )
}

export default Meet;