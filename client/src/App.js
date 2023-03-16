import React, { useRef } from "react";
import './App.css';
import { Link } from "react-router-dom";
import axios from "axios";

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
            <li>
              <button className="nav-button" onClick={() => handleNavigation(projectsRef)}>
                Projects
              </button>
            </li>
            <li>
              <button className="nav-button" onClick={() => handleNavigation(contactRef)}>
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <div className="login-form-container">
        <h1>Login</h1>
        <form className="form">
          <label>Email:</label>
          <input type="email" name="email" />

          <label>Password:</label>
          <input type="password" name="password" />

          <button>Login</button>
          <br />
          <br />
          <Link to="/Reports">
            <button>Reports</button>
          </Link>
        </form>
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

      <div ref={aboutRef} className="about">
        <h1>About</h1>
        <p>
          hello
        </p>
      </div>
    </div>
  );
}

export default HomePage;
