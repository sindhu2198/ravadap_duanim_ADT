import React, { useState, useEffect, useRef } from "react";
import "./Hamburgermenu.css";

const Hamburgermenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="hamburger-menu-container" ref={menuRef}>
      <div className="hamburger-icon" onClick={handleClick}>
        <div className="icon-line"></div>
        <div className="icon-line"></div>
        <div className="icon-line"></div>
      </div>
      {showMenu && (
        <div className="menu-items">
          <a href="/">HOME</a>

          <a href="/GetEmpforemp">GET EMPLOYEE</a>
         
        </div>
      )}
    </div>
  );
};

export default Hamburgermenu;
