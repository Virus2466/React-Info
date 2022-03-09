import React from "react"
import logo from "./images/react-icon-small.png"



function Navbar(){

    return (
        <nav>
            <img src={logo} alt="logo" className="nav-icon"/>
            <h3 className="nav-logo-text">ReactFacts</h3>
            <h4 className="nav-title">React Course Nice </h4>

        </nav>



    )

}

export default Navbar