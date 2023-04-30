import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Hamburgermenu from "./Hamburgermenu";
import "./FetchEmp.css";
import axios from "axios";

var backendurl='https://skill-snapshot-frontend.onrender.com';
const FetchEmpanddelete = () => {
  const [inputID, setInputID] = useState("");
  const [noEmployee, setNoEmployee] = useState(false);
  const navigate = useNavigate();

  const fetchEmployeeData = async (id) => {
    try {
      console.log("id", id);
      const response = await axios.get(
        `https://skill-snapshot-frontend.onrender.com/api/get/${id}`
      );
      console.log(response.data);
      console.log("response.status", response.status);
      if (response.status === 200) {
        console.log("fetch emp before", response.data);
        const employeeData = response.data[0][0];
        console.log("fetch",employeeData)
        if (employeeData && employeeData.EID) {
          return true;
        }
      }
      return false;
    } catch (error) {
      console.error("Error fetching employee data:", error);
      return false;
    }
  };
  
  const handleIDSubmit = async (e) => {
    e.preventDefault();
       if (inputID) {
        const employeeExists = await fetchEmployeeData(inputID);
        if (employeeExists) {
          console.log("Employee exists, navigating to UpdateEmp");
          navigate(`/delete/${inputID}`);
        } else {
          console.log("Employee does not exist, navigating to NoEmployee");
          setNoEmployee(true);
          navigate("/no-employee");
        }
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
