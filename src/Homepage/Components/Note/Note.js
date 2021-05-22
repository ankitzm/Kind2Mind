import React from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import NotesApp from './NotesApp';
import Heading from "./../Heading/Heading";
import "./note.css"


const Note = () => {
  return (
    <div className="note">
        <div id="note">
            <Heading title="Notes App" />
            <hr/>
        </div>
        <p></p>
        <div className="container-fluid">
            <BrowserRouter>
                <Route path="/" component={NotesApp}/>
            </BrowserRouter>
        </div>
    </div>
  );
};

export default Note;
