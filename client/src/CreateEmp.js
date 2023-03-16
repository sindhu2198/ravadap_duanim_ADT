import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./CreateEmp.css";
import axios from "axios";
import { toast } from "react-toastify";

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
          setState({ Name: "", Email: "", location: "",rating_2023:"", rating_2022:"", rating_2021:"", Salary_2023:"", Salary_2022:"", Salary_2021:"", Comments:"" });
        })
        .catch((err) => toast.error(err.response.data));
      toast.success("Contact Added Successfully");

      setTimeout(() => navigate("/"), 500);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          id="Name"
          name="Name"
          placeholder="Your Name ..."
          value={Name || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          id="Email"
          name="Email"
          placeholder="Your Email ..."
          value={Email || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="location">location</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Your Location ..."
          value={location || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="rating_2023">rating_2023</label>
        <input
          type="number"
          id="rating_2023"
          name="rating_2023"
          placeholder="Your Rating ..."
          value={rating_2023 || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="rating_2022">rating_2022</label>
        <input
          type="number"
          id="rating_2022"
          name="rating_2022"
          placeholder="Your Rating ..."
          value={rating_2022 || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="rating_2021">rating_2021</label>
        <input
          type="number"
          id="rating_2021"
          name="rating_2021"
          placeholder="Your Rating ..."
          value={rating_2021 || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="Salary_2023">Salary_2023</label>
        <input
          type="number"
          id="Salary_2023"
          name="Salary_2023"
          placeholder="Your Salary_2023 ..."
          value={Salary_2023 || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="Salary_2022">Salary_2022</label>
        <input
          type="number"
          id="Salary_2022"
          name="Salary_2022"
          placeholder="Your Salary_2022 ..."
          value={Salary_2022 || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="location">Salary_2021</label>
        <input
          type="number"
          id="Salary_2021"
          name="Salary_2021"
          placeholder="Your Salary_2021 ..."
          value={Salary_2021 || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="Comments">Comments</label>
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
  );
};

export default CreateEmp;
