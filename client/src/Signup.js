import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Hamburgermenu from './Hamburgermenu';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/signup', formData);
      alert('User registered successfully.');
      navigate('/'); // Navigate to the homepage after successful registration
    }catch (error) {
      console.error(error);
      alert('Error registering the user.');
      
    }
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

      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      <label htmlFor="role">Role:</label>
      <select
        id="role"
        name="role"
        value={formData.role}
        onChange={handleChange}
      >
        <option value="">Select a role</option>
        <option value="employee">Employee</option>
        <option value="admin">Admin</option>
      </select>

      <button type="submit">Register</button>
    </form>
    
    </div>
    </div>
  );
};

export default Signup;
