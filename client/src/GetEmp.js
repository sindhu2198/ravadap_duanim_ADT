import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import "./GetEmp.css";
import Hamburgermenu from "./Hamburgermenu";
const RatingBarChart = ({ data }) => {
    return (
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="rating" fill="#8884d8" />
      </BarChart>
    );
  };
  const GetEmp = () => {
    const [user, setUser] = useState({
      EID: "",
      Name: "",
      Email: "",
      projects_2021:"",
      projects_2022:"",
      projects_2023:"",
      location: "",
      rating_2021: "",
      rating_2022: "",
      rating_2023: "",
      Salary_2021: "",
      Salary_2022: "",
      Salary_2023: "",
      comments_2021: "",
      comments_2022: "",
      comments_2023: "",
    });
    const [inputID, setInputID] = useState("");
    const { EID } = useParams();
    const navigate = useNavigate();
  
    useEffect(() => {
      console.log("EID value:", EID); // Add this line
      if (EID) {
        axios
          .get(`http://localhost:5001/api/get/${EID}`)
          .then((resp) => {
            if (resp.data.length > 0) {
              setUser({ ...resp.data[0] });
            } else {
              console.error("Employee not found");
            }
          });
      }
    }, [EID]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      navigate(`/GetEmp/${inputID}`);
    };
    const ratingData = [
      { name: "2021", rating: user.rating_2021 || 0 },
      { name: "2022", rating: user.rating_2022 || 0 },
      { name: "2023", rating: user.rating_2023 || 0 },
    ];
    console.log("User object:", user);
  return (
    <div className="get-employee">
    <div style={{ marginTop: "150px" }}>
   
      <div className="app">
      
        <div className="logo">SKILL SNAPSHOT</div>
      
    </div>
      <div className="card">
        <div className="card-header">
          <p>Employee Details</p>
        </div>
        {!EID ? (
          <form onSubmit={handleSubmit}>
            <label htmlFor="employeeID">Enter Employee ID: </label>
            <input
              type="number"
              id="employeeID"
              value={inputID}
              onChange={(e) => setInputID(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        ) : (
            <div className="container">
            <strong>Employee ID: </strong>
            <span>{EID}</span>
            <br />
            <br />
            <strong>Employee Name: </strong>
            <span>{user.Name}</span>
            <br />
            <br />
            <strong>Employee Email: </strong>
            <span>{user.Email}</span>
            <br />
            <br />
            <strong>Employee Projects in 2021: </strong>
            <span>{user.projects_2021}</span>
            <br />
            <br />
            <strong>Employee Projects in 2022: </strong>
            <span>{user.projects_2022}</span>
            <br />
            <br />
            <strong>Employee Projects in 2023: </strong>
            <span>{user.projects_2023}</span>
            <br />
            <br />
            <strong>Rating in 2023(if any): </strong>
            <span>{user.rating_2023}</span>
            <br />
            <br />
            <strong>Rating in 2022(if any): </strong>
            <span>{user.rating_2022}</span>
            <br />
            <br />
            <strong>Rating in 2021(if any): </strong>
            <span>{user.rating_2021}</span>
            <br />
            <br />
            <strong>Salary in 2023(if any): </strong>
            <span>{user.salary_2023}</span>
            <br />
            <br />
            <strong>Salary in 2022(if any): </strong>
            <span>{user.salary_2022}</span>
            <br />
            <br />
            <strong>Salary in 2021(if any): </strong>
            <span>{user.salary_2021}</span>
            <br />
            <br />
            <strong>Comments provided in 2021: </strong>
            <span>{user.comments_2021}</span>
            <br />
            <br />
            <strong>Comments provided in 2022: </strong>
            <span>{user.comments_2022}</span>
            <br />
            <br />
            <strong>Comments provided in 2023: </strong>
            <span>{user.comments_2023}</span>
            <br />
            <br />
            <Link to="#rating-bar-chart" className="chart-link">View Ratings Chart</Link>
      <div id="rating-bar-chart" style={{ marginTop: "20px" }}>
        <RatingBarChart data={ratingData} />
      </div>
            <Link to="/">
              <div className="btn btn-edit">Go Back</div>
            </Link>          
            </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default GetEmp;


