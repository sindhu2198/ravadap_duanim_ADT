import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import "./GetEmp.css";
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
  const [user, setUser] = useState({});
  const [inputID, setInputID] = useState("");
  const { EID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
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
    { name: "2021", rating: user.rating_2021 },
    { name: "2022", rating: user.rating_2022 },
    { name: "2023", rating: user.rating_2023 },
  ];
  console.log("User object:", user);
  return (
    <div style={{ marginTop: "150px" }}>
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
            <strong>Employee Location: </strong>
            <span>{user.location}</span>
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
            <span>{user.Salary_2023}</span>
            <br />
            <br />
            <strong>Salary in 2022(if any): </strong>
            <span>{user.Salary_2022}</span>
            <br />
            <br />
            <strong>Salary in 2021(if any): </strong>
            <span>{user.Salary_2021}</span>
            <br />
            <br />
            <strong>Comments provided: </strong>
            <span>{user.Comments}</span>
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
  );
};

export default GetEmp;


