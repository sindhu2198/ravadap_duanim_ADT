// src/NoEmployee.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Hamburgermenu from "./Hamburgermenu";

const NoEmployee = () => {
  return (
    <div className="report-background2">
    <header className="header">
      <Hamburgermenu />
      <div className="logo">
        SKILL SNAPSHOT
        <Link to="/signout">
          <button className="signout-button">Sign Out</button>
        </Link>
      </div>
    </header>
    <h1>No Employee Found</h1>
  </div>
  
  );
};

export default NoEmployee;
