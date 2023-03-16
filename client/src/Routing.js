import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App1.css";
import Reports from "./Reports";
import App from "./App"
import CreateEmp from './CreateEmp';
import Signup from './Signup';
import Signin from './Signin';

function Routing() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
         
          <Route path="/Reports" element={<Reports />} />
          <Route path="/Create" element={<CreateEmp />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default Routing;
