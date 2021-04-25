import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {

// function to hide nav when the user croll the creen
const [show, handleShow] = useState(false);
const transitionNavBar = () => {
    if(window.scrollY > 100){
        handleShow(true);
    }else{
        handleShow(false);
    }
}

useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll",transitionNavBar);
}, []);



    return (
        // add black class only if show variable is true
        <div className={`nav ${show && 'nav__black'}`}> 
            <div className="nav__content">
                <img 
                    className="nav__logo"
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                    alt="Logo"
                />
                <img 
                    className="nav__avatar"
                    src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" 
                    alt="Avatar"
                />
            </div>    
        </div>
    )
}

export default Nav
