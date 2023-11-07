import React from 'react';
import logo from '../images/logo.png';
import '../homepageComponents/navbar.css'

function Mnavbar(){

    return(
        <div className="header">
            <div class="nav">
            <div class="logo">
               <img src={logo} alt="Logo" id='logo1'/>;
            </div>
            <ul class="menu">
                <li><a href="http://">Home</a></li>
                <li><a href="http://">About</a></li>
                <li><a href="http://">Contact</a></li>        
            </ul>
        </div>
        </div>
    )
}

export default Mnavbar