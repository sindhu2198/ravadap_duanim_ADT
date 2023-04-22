import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Reports.css";
import { toast } from "react-toastify";
import axios from "axios";
import Hamburgermenu from "./Hamburgermenu";

const Reports = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5001/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

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
      <div className="get-started">
      <Link to="/Create">
        <button className="get-started-btn">GET STARTED</button>
      </Link>
      </div>
    </div>
    
  );
};

export default Reports;
