import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./CreateEmp.css";
import axios from "axios";
import { toast } from "react-toastify";
import Hamburgermenu from "./Hamburgermenu";

const initialState = {
  Name: "",
  Email: "",
  years: [
    {
      year: "2023",
      projects: [],
      rating: "",
      salary: "",
      Comments: ""
    },
  ],
};

const CreateEmp = () => {
  const [state, setState] = useState(initialState);
  const { Name, Email, years } = state;


  const navigate = useNavigate();
  const hasEmptyProjectName = years.some((yearObj) => {
    return yearObj.projects.some((project) => !project);
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Name || !Email) {
      toast.error("Please provide value into each input field");
    }else if (hasEmptyProjectName) {
      toast.error("Please provide a project name for each project");
    }
       else {
      axios
        .post("http://localhost:5001/api/post", {
          Name,
          Email,
          years
        })
        .then(() => {
          setState(initialState);
          toast.success("Contact Added Successfully");
          window.alert("Employee Created Successfully");
        })
        .catch((err) => toast.error(err.response.data));

      setTimeout(() => navigate("/Create"), 500);
    }
  };


    // Update locations and projects based on the selected year
    const handleInputChange = (e, index) => {
      const { name, value } = e.target;
    
      if (name === "project") {
        const updatedYears = [...years];
        const attributeName = `${name}s`;
    
        // Create a new projects array with the new value and previous values
        updatedYears[index][attributeName] = [
          ...updatedYears[index][attributeName],
          value,
        ];
    
        setState({ ...state, years: updatedYears });
      } else if (
        name === "year" ||
        name === "rating" ||
        name === "salary" ||
        name === "Comments"
      ) {
        const updatedYears = [...years];
        updatedYears[index][name] = value;
        setState({ ...state, years: updatedYears });
      } else {
        setState({ ...state, [name]: value });
      }
    };
    
    
    const [selectedProjects, setSelectedProjects] = useState(years.map(() => ""));

    
    
    const handleAddYear = () => {
      setState({
        ...state,
        years: [
          ...years,
          {
            year: "",
            projects: [],
            rating: "",
            salary: "",
            Comments: ""
          },
        ],
      });
    };


  return (
    <div className="report-background">
    <div className="app">
      <header className="header">
        <Hamburgermenu />
        <div className="logo">SKILL SNAPSHOT</div>
      </header>
    </div>
    <div className="form-container">
      <form className="employee-form" onSubmit={handleSubmit}>
        <h2>Create Employee</h2>
        <div className="form-group">
          <label htmlFor="Name" style={{ fontWeight: "bold" }}>
            Employee Name
          </label>
          <input
            type="text"
            id="Name"
            name="Name"
            placeholder="Employee Name ..."
            value={Name || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Email" style={{ fontWeight: "bold" }}>
            Employee Email
          </label>
          <input
            type="email"
            id="Email"
            name="Email"
            placeholder="Employee Email ..."
            value={Email || ""}
            onChange={handleInputChange}
          />
        </div>

        {years.map((yearObj, index) => (
          <div key={index} className="year-section">
            <h3>Year {index + 1}</h3>
            <div className="form-group">
              <label htmlFor="year" style={{ fontWeight: "bold" }}>
                Select Year
              </label>
              <select
                id="year"
                name="year"
                value={yearObj.year || ""}
                onChange={(e) => handleInputChange(e, index)}
              >
                <option value="">Select Year</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </select>
            </div>
          <div className="yearAttributes">
      <label
        htmlFor="projects"
        style={{ fontWeight: "bold" }}
      >{`Projects in ${yearObj.year}`}</label>
        <select
  id="project"
  name="project"
  value={yearObj.projects[0] || ""}
  onChange={(e) => handleInputChange(e, index)}
>
  <option value="">Select Project</option>
  <option value="Project A">Project A</option>
  <option value="Project B">Project B</option>
  <option value="Project C">Project C</option>
</select>




</div>
<div className="yearAttributes">
      <label
        htmlFor="rating"
        style={{ fontWeight: "bold" }}
      >{`Employee Rating in ${yearObj.year}`}</label>
          <input
            type="number"
            id="rating"
            name="rating"
            placeholder={`Employee Rating in ${yearObj.year} ...`}
            value={yearObj.rating || ""}
            onChange={(e) => handleInputChange(e, index)}
          />
</div>
<div className="yearAttributes">
      <label
        htmlFor="salary"
        style={{ fontWeight: "bold" }}
      >{`Employee Salary in ${yearObj.year}`}</label>
          <input
            type="number"
            id="salary"
            name="salary"
            placeholder={`Employee Salary in ${yearObj.year} ...`}
            value={yearObj.salary || ""}
            onChange={(e) => handleInputChange(e, index)}
          />
</div>
 
<div className="yearAttributes">
  <label
    htmlFor="Comments"
    style={{ fontWeight: "bold" }}
  >{`Comments for each project/ year in ${yearObj.year}`}</label>
  <input
    type="text"
    id="Comments"
    name="Comments"
    placeholder="Your Comments ..."
    value={yearObj.Comments || ""}
    onChange={(e) => handleInputChange(e, index)} // Include index as a second argument
  />
</div>

              </div>
              ))}
          <button type="button"
      className="add-year-btn"
      onClick={handleAddYear}
    >
      Add Year
    </button>
    <input type="submit" className="submit-btn" value="Save" />
  </form>
  </div>
  </div>
);
};

export default CreateEmp;
