import React from "react";
import "./CreatedBy.css";
import ProfileCard from "./ProfileCard/ProfileCard";
import Rajveer from "../assets/rajveersq.jpeg"
import Ankit from "../assets/pp.jfif"
import Gibran from "../assets/gibransq.jpeg"

const CreatedBy = () => {
    return (

    <div className="created-by" id="created-by">
        <div className="heading">PROUDLY CREATED BY</div>
        <div className="created-by-container">
        
        <ProfileCard
            Picture={Rajveer}
            Name="Rajveer Singh"
            About="AI/ML and Python" 
      
        />

<ProfileCard
Picture={Ankit}
            Name="Ankit Singh"
            About="Web Development" 
       
        />

<ProfileCard
Picture={Gibran}
            Name="MA Gibran Fahad"
            About="Database Management" 
  
        />

        </div>
    </div>


    )
} 

export default CreatedBy;