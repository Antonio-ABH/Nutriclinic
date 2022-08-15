import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="links">
      <NavLink activeclassname="active" to={"/home"}>
        Home
      </NavLink>
      <NavLink activeclassname="active" to={"/nosotros"}>
        Quienes Somos
      </NavLink>
      <NavLink activeclassname="active" to={"/servicios"}>
        Servicios
      </NavLink>
    </div>
  );
};

export default NavBar;
