import React, { useState } from "react";
import "./Nav.css";

const Nav = () => {

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 10) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);


    return(

<nav className={navbar ? 'navbar navbar-active stroke' : 'navbar stroke'} data-aos="ease in out">

    
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">Mental health</a></li>
      <li><a href="#created-by">About Us</a></li>
    </ul>
  </nav>

    )
}

export default Nav;