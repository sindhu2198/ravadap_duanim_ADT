import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./GetEmp.css";

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
            <strong>Comments provided: </strong>
            <span>{user.Comments}</span>
            <br />
            <br />
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


