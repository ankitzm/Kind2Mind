import React from "react";
import  "./ProfileCard.css";

const ProfileCard = ({Picture, Name, About}) => {
    return (
        <div className="profile-card">


<div class="card-container">
	<img class="round" src={Picture} height="200px" alt="user" />
	<h3>{Name}</h3>
	<h6>India</h6>
	<h4>{About}</h4>
	
</div>


        </div>
    )
}
export default ProfileCard;