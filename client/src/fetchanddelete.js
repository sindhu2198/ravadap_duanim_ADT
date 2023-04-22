import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Hamburgermenu from "./Hamburgermenu";
import "./FetchEmp.css";

const FetchEmpanddelete = () => {
  const [inputID, setInputID] = useState("");
  const navigate = useNavigate();

  const handleIDSubmit = (e) => {
    e.preventDefault();
    if (inputID) {
      navigate(`/delete/${inputID}`);
    }
  };

  return (
    <div className="report-background">
      <div className="app">
      <header className="header">
        <Hamburgermenu />
        <div className="logo">SKILL SNAPSHOT
        <Link to="/signout">
        <button className="signout-button">Sign Out</button>
      </Link>
        </div>
       
      </header>
      
    </div>
     
      <div className="form-container">
        <form className="employee-form" onSubmit={handleIDSubmit}>
          <h2>Enter Employee ID</h2>
          <div className="form-group">
            <label htmlFor="employeeID" style={{ fontWeight: "bold" }}>
              Employee ID
            </label>
            <input
              type="number"
              id="employeeID"
              value={inputID}
              onChange={(e) => setInputID(e.target.value)}
            />
          </div>
          <input type="submit" className="submit-btn" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default FetchEmpanddelete;
