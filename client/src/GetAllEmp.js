import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./GetAllEmp.css";
import Hamburgermenu from "./Hamburgermenu";

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
    <div className="get-all-employee">
   <div style={{ marginTop: "150px" }}>
   
   <div className="app">
   <header className="header">
     <Hamburgermenu />
     <div className="logo">SKILL SNAPSHOT</div>
   </header>
 </div>
    
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
                <th>Review Date</th>
                <th>Reviewer Name</th>
                <th>Projects in 2023</th>
                <th>Projects in 2022</th> 
                <th>Projects in 2021</th>     
                <th>Salary 2021</th>
                <th>Salary 2022</th>
                <th>Salary 2023</th>
                <th>Rating 2021</th>
                <th>Rating 2022</th>
                <th>Rating 2023</th>
                <th>Comments 2021</th>
                <th>Comments 2022</th>
                <th>Comments 2023</th>
                <th>View Report</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.EID}>
                  <td>{employee.EID}</td>
                  <td>{employee.Name}</td>
                  <td>{employee.Email}</td>
                  <td>{employee.performance_review_date}</td>                  
                  <td>{employee.reviewer_name}</td>
                  <td>{employee.projects_2021}</td>
                  <td>{employee.projects_2022}</td>
                  <td>{employee.projects_2023}</td>
                  <td>{employee.salary_2021}</td>
                  <td>{employee.salary_2022}</td>
                  <td>{employee.salary_2023}</td>
                  <td>{employee.rating_2023}</td>
                  <td>{employee.rating_2022}</td>
                  <td>{employee.rating_2021}</td>
                  <td>{employee.Comments_2021}</td>
                  <td>{employee.Comments_2022}</td>
                  <td>{employee.Comments_2023}</td>
                  <td>
        <Link to={`/EmployeeReportCharts/${employee.EID}`}>View Report</Link>
      </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link to="/GetAllEmp">
          <div className="btn btn-edit">Go Back</div>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default GetAllEmp;
