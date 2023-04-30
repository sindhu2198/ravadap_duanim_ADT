import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Hamburgermenu from "./Hamburgermenu";
import "./UpdateEmp.css";

const UpdateEmp = () => {
  const [user, setUser] = useState({
    EID: "",
    Name: "",
    Email: "",
    projects_2021: "",
    projects_2022: "",
    projects_2023: "",
    rating_2021: "",
    rating_2022: "",
    rating_2023: "",
    salary_2021: "",
    salary_2022: "",
    salary_2023: "",
    comments_2021: "",
    comments_2022: "",
    comments_2023: "",
  });
  const { EID } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (EID) {
      axios
        .get(`https://skill-snapshot-frontend.onrender.com/api/get/${EID}`)
        .then((resp) => {
          if (resp.data.length > 0) {
            setUser(resp.data[0]);
            
          } else {
            console.error("Employee not found");
          }
        });
    }
  }, [EID]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedUser = {
        ...user,
        years: [
            {
              year: 2021,
              projects: user.projects_2021 ? user.projects_2021.split(',') : [],
              rating: user.rating_2021,
              salary: user.salary_2021,
              Comments: user.comments_2021,
            },
            {
              year: 2022,
              projects: user.projects_2022 ? user.projects_2022.split(',') : [],
              rating: user.rating_2022,
              salary: user.salary_2022,
              Comments: user.comments_2022,
            },
            {
              year: 2023,
              projects: user.projects_2023 ? user.projects_2023.split(',') : [],
              rating: user.rating_2023,
              salary: user.salary_2023,
              Comments: user.comments_2023,
            },
          ],
      };

      await axios.put(`http://localhost:5001/api/update/${EID}`, updatedUser);
      alert("Employee details updated successfully.");
      navigate("/fetch");
    } catch (error) {
      console.error("Error updating employee details:", error);
    }
  };

  return (
    <div className="update-employee">
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
      <div className="card-update">
        <div className="card-header">
          <p>Update Employee Details</p>
        </div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="employeeID">Employee ID: </label>
          <input
            type="number"
            id="employeeID"
            name="EID"
            value={user.EID}
            disabled
          />
          <br />
          <label htmlFor="employeeName">Employee Name: </label>
          <input
            type="text"
            id="employeeName"
            name="Name"
            value={user.Name}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="employeeEmail">Employee Email: </label>
          <input
            type="email"
            id="employeeEmail"
            name="Email"
            value={user.Email}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="projects_2023">Projects in 2023 (if any): </label>
<select id="projects_2023" name="projects_2023" value={user.projects_2023} onChange={handleChange}>
  <option value="">-- Select project --</option>
  <option value="Project A">Project A</option>
  <option value="Project B">Project B</option>
  <option value="Project C">Project C</option>
  {/* Add more options as needed */}
</select>

<br />
<label htmlFor="projects_2022">Projects in 2022 (if any): </label>
<select id="projects_2022" name="projects_2022" value={user.projects_2022} onChange={handleChange}>
  <option value="">-- Select project --</option>
  <option value="Project A">Project A</option>
  <option value="Project B">Project B</option>
  <option value="Project C">Project C</option>
  {/* Add more options as needed */}
</select>
<br />
<label htmlFor="projects_2021">Projects in 2021 (if any): </label>
<select id="projects_2021" name="projects_2021" value={user.projects_2021} onChange={handleChange}>
  <option value="">-- Select project --</option>
  <option value="Project A">Project A</option>
  <option value="Project B">Project B</option>
  <option value="Project C">Project C</option>
  {/* Add more options as needed */}
</select>
<br />
          <label htmlFor="rating_2023">Rating in 2023 (if any): </label>
<input
  type="text"
  id="rating_2023"
  name="rating_2023"
  value={user.rating_2023}
  onChange={handleChange}
/>
<br />

<label htmlFor="rating_2022">Rating in 2022 (if any): </label>
<input
  type="text"
  id="rating_2022"
  name="rating_2022"
  value={user.rating_2022}
  onChange={handleChange}
/>
<br />

<label htmlFor="rating_2021">Rating in 2021 (if any): </label>
<input
  type="text"
  id="rating_2021"
  name="rating_2021"
  value={user.rating_2021}
  onChange={handleChange}
/>
<br />

<label htmlFor="salary_2023">Salary in 2023 (if any): </label>
<input
  type="number"
  id="salary_2023"
  name="salary_2023"
  value={user.salary_2023}
  onChange={handleChange}
/>
<br />

<label htmlFor="salary_2022">Salary in 2022 (if any): </label>
<input
  type="number"
  id="salary_2022"
  name="salary_2022"
  value={user.salary_2022}
  onChange={handleChange}
/>
<br />

<label htmlFor="salary_2021">Salary in 2021 (if any): </label>
<input
  type="number"
  id="salary_2021"
  name="salary_2021"
  value={user.salary_2021}
  onChange={handleChange}
/>
<br />

<label htmlFor="comments">Comments provided in 2023: </label>
<br/>
<textarea
  id="comments_2023"
  name="comments_2023"
  value={user.comments_2023}
  onChange={handleChange}
/>
<br />
<label htmlFor="comments">Comments provided in 2022: </label>
<br/>
<textarea
  id="comments_2022"
  name="comments_2022"
  value={user.comments_2022}
  onChange={handleChange}
/>
<br />
<label htmlFor="comments">Comments provided in 2021: </label>
<br/>
<textarea
  id="comments_2021"
  name="comments_2021"
  value={user.comments_2021}
  onChange={handleChange}
/>
<br />

  <button type="submit">Update</button>
          <Link to="/fetch">
            <button type="button">Cancel</button>
          </Link>
        </form>
      </div>
    </div>
         );
        };
        
        export default UpdateEmp;