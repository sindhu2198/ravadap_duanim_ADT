import React, { useState } from "react";
import "./Hamburgermenu.css";

const HamburgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="hamburger-menu-container">
      <div className="hamburger-icon" onClick={handleClick}>
        <div className="icon-line"></div>
        <div className="icon-line"></div>
        <div className="icon-line"></div>
      </div>
      {showMenu && (
        <div className="menu-items">
          <a href="/">HOME</a>
          <a href="/about">CREATE EMPLOYEE</a>
          <a href="/contact">GET EMPLOYEE</a>
          <a href="/contact">UPDATE EMPLOYEE</a>
          <a href="/contact">DELETE EMPLOYEE</a>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
