import React from 'react';
import logo from '../images/logo.png';
import '../homepageComponents/navbar.css'
import { Link } from 'react-router-dom';

function Mnavbar(){

    return(
        <div className="header">
            <div class="nav">
            <div class="logo">
               <img src={logo} alt="Logo" id='logo1'/>;
            </div>
            <ul class="menu">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/Resultpage'}>About</Link></li> 
                <li><Link to={'/Resultpage'}>Contact</Link></li>             
            </ul>
        </div>
        </div>
    )
}

export default Mnavbar