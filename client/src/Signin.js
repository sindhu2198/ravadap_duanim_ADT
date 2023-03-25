import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/signin', formData);
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      alert('Signin successfully done.');
      localStorage.setItem('userRole', response.data.user.role);
      localStorage.setItem('employeeId', response.data.user.id);
      console.log(localStorage);
      // Redirect to the desired page or display a success message
      navigate('/Dashboardpage');
    } catch (error) {
      console.error(error);
      alert('Error signing in.');
    }
  };

  
    return (
        <form onSubmit={handleSubmit} className="form">
          <h1>Login</h1>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
      
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
      
          <button type="submit">Login</button>
        </form>
      );
      
  
};

export default Signin;
