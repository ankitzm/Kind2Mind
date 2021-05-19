import React from "react";
import "./CreatedBy.css";
import ProfileCard from "./ProfileCard/ProfileCard";
import Ankit from "../assets/pp.jfif"
import Heading from "../Heading/Heading";

const CreatedBy = () => {
    return (

    <div className="created-by" id="created-by">
        <Heading title="Proudly Created By" />
        <div className="created-by-container">
        
    

<ProfileCard
Picture={Ankit}
            Name="Ankit Singh"
            About="Web Development" 
       
        />

        </div>
    </div>


    )
} 

export default CreatedBy;