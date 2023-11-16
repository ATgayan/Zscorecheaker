import React from "react";
import logo from "../images/logo.png";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import Contactus from "../component/contactus";
import { useState } from "react";

function Mnavbar() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="header">
      <div class="nav">
        <div class="logo">
        <Link to={"/"}><img src={logo} alt="Logo" id="logo1" /></Link>
        </div>
        <ul class="menu">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/Aboutus"}>About Us</Link>
          </li>

          <li>
            <Link onClick={openPopup}>Contact Us</Link>
            {isPopupOpen && <Contactus onClose={closePopup} />}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Mnavbar;
