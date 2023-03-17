import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./GetAllEmp.css";

const GetAllEmp = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/get")
      .then((resp) => {
        setEmployees(resp.data);
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
  }, []);

  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>Employee Details</p>
        </div>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Location</th>
                <th>Rating 2023</th>
                <th>Rating 2022</th>
                <th>Rating 2021</th>
                <th>Salary 2023</th>
                <th>Salary 2022</th>
                <th>Salary 2021</th>
                <th>Comments</th>
                <th>View Report</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.EID}>
                  <td>{employee.EID}</td>
                  <td>{employee.Name}</td>
                  <td>{employee.Email}</td>
                  <td>{employee.location}</td>
                  <td>{employee.rating_2023}</td>
                  <td>{employee.rating_2022}</td>
                  <td>{employee.rating_2021}</td>
                  <td>{employee.Salary_2023}</td>
                  <td>{employee.Salary_2022}</td>
                  <td>{employee.Salary_2021}</td>
                  <td>{employee.Comments}</td>
                  <td>
        <Link to={`/EmployeeReportCharts/${employee.EID}`}>View Report</Link>
      </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link to="/">
          <div className="btn btn-edit">Go Back</div>
        </Link>
      </div>
    </div>
  );
};

export default GetAllEmp;
