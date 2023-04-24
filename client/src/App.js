import React, { useRef } from "react";
import './App.css';
import { Link } from "react-router-dom";
import axios from "axios";
import Signin from "./Signin";
import Signup from "./Signup";

function HomePage() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleNavigation = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo">SKILL SNAPSHOT</div>
        <nav>
          <ul className="nav-list">
            <li>
              <button className="nav-button" onClick={() => handleNavigation(aboutRef)}>
                About
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <div className="login-form-container">
      
         <Signin />
         
        
      </div>
     
      <div className="content">
      
        
        
        <h3 className="animated-title">
          { "The Employee Performance Tracker".split(" ").map((word, index) => (
            <React.Fragment key={index}>
              {index > 0 && " "}
              {word.split("").map((letter, letterIndex) => (
                <span key={letterIndex} className="wave" style={{ animationDelay: `${0.1 * (letterIndex + 1)}s` }}>{letter}</span>
              ))}
            </React.Fragment>
          ))}
        </h3>
      </div>

      <div ref={aboutRef} className="about-section">
        <div className="about-container">
          <h1>About the Project:</h1><br/><br/><br/><br/><br/>
          <p>
          SkillSnapshot is an extremely useful tool for organizations 
          that want to monitor and evaluate employee performance in a comprehensive and data-driven way. By using this web-based application, managers and HR personnel can input, update, and view employee performance data in real-time, enabling them to make informed decisions about employee development, goal-setting, and performance improvement. The application's user-friendly interface makes it easy for managers and employees to access and interpret performance data, and its feedback system allows for personalized feedback that can help employees to improve their performance and achieve their goals. The application also helps managers to identify areas where additional training or development may be needed, ensuring that employees have the resources and support they need to succeed. Overall, the employee performance tracker project is an invaluable tool that enables organizations to optimize their workforce and achieve their goals by utilizing data-driven insights and resources
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
