import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./CreateEmp.css";
import axios from "axios";
import { toast } from "react-toastify";
import Hamburgermenu from "./Hamburgermenu";



const initialState = {
    Name: "",
    Email: "",
    location: "",
    rating_2023: "",
    rating_2022: "",
    rating_2021: "",
    Salary_2023: "",
    Salary_2022: "",
    Salary_2021: "",
    Comments: ""
};

const CreateEmp = () => {
  const [state, setState] = useState(initialState);


  const { Name, Email, location, rating_2023, rating_2022, rating_2021, Salary_2023, Salary_2022, Salary_2021, Comments } = state;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Name || !Email || !location) {
      toast.error("Please provide value into each input field");
    } else {
      axios
        .post("http://localhost:5001/api/post", {
          Name,
          Email,
          location,
          rating_2023, rating_2022, rating_2021, Salary_2023, Salary_2022, Salary_2021, Comments 
        })        
        .then(() => {
            setState(initialState);
            toast.success("Contact Added Successfully");
            window.alert("Employee Created Successfully")
          })
          .catch((err) => toast.error(err.response.data));

      setTimeout(() => navigate("/Create"), 500);
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="report-background">
      <div className="app">
        <header className="header">
          <Hamburgermenu />
          <div className="logo">SKILL SNAPSHOT</div>
        </header>
      </div>
    <div style={{ marginTop: "25px" }}>
      <form
        style={{
          margin: "auto",
          padding: "0px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="Name"style={{fontWeight: 'bold'}}>Employee Name</label>
        <input
          type="text"
          id="Name"
          name="Name"
          placeholder="Employee Name ..."
          value={Name || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="Email"style={{fontWeight: 'bold'}}>Employee Email</label>
        <input
          type="email"
          id="Email"
          name="Email"
          placeholder="Employee Email ..."
          value={Email || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="location"style={{fontWeight: 'bold'}}>Employee Location</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Employee Location ..."
          value={location || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="rating_2023"style={{fontWeight: 'bold'}}>Employee Rating in 2023</label>
        <input
          type="number"
          id="rating_2023"
          name="rating_2023"
          placeholder="Employee Rating ..."
          value={rating_2023 || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="rating_2022"style={{fontWeight: 'bold'}}>Employee Rating in 2022</label>
        <input
          type="number"
          id="rating_2022"
          name="rating_2022"
          placeholder="Employee Rating in 2022 ..."
          value={rating_2022 || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="rating_2021"style={{fontWeight: 'bold'}}>Employee Rating in 2021</label>
        <input
          type="number"
          id="rating_2021"
          name="rating_2021"
          placeholder="Employee Rating in 2021 ..."
          value={rating_2021 || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="Salary_2023"style={{fontWeight: 'bold'}}>Employee Salary in 2023</label>
        <input
          type="number"
          id="Salary_2023"
          name="Salary_2023"
          placeholder="Employee Salary in 2023 ..."
          value={Salary_2023 || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="Salary_2022"style={{fontWeight: 'bold'}}>Employee Salary in 2022</label>
        <input
          type="number"
          id="Salary_2022"
          name="Salary_2022"
          placeholder="Employee Salary in 2022 ..."
          value={Salary_2022 || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="Salary_2021"style={{fontWeight: 'bold'}}>Employee Salary in 2021</label>
        <input
          type="number"
          id="Salary_2021"
          name="Salary_2021"
          placeholder="Employee Salary in 2021 ..."
          value={Salary_2021 || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="Comments"style={{fontWeight: 'bold'}}>Comments</label>
        <input
          type="text"
          id="Comments"
          name="Comments"
          placeholder="Your Comments ..."
          value={Comments || ""}
          onChange={handleInputChange}
        />
         
            <input type="submit" value="Save" />
         
      </form>
    </div>
    </div>
    
    
  );
  
};

export default CreateEmp;
