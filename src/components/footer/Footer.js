import React from "react";
import "./Footer.css";
import Logo from "../brand/images/Logo.png";
import Whats from "./images/whats.svg";
import Insta from "./images/instagram.svg";
import Face from "./images/facebook.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sectionFooter">
        <div className="logoFooter">
          <img src={Logo} alt="LogoNutri" />
          <p>TM</p>
        </div>
        <div className="social">
          <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
            <img className="logos" src={Whats} alt="imageWhats" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img className="logos" src={Face} alt="imageFace" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img className="logos" src={Insta} alt="imageInsta" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
