import React, { useRef } from "react";
import homeImage from './Images/homepage_5.png'
import loginImage from './Images/loginpage_bgd.jpg';
import './App.css';
// import handleSignUp from './HandleSignUp';
// import { Link } from 'react-router-dom';
// import SignUpPage from './SignUpPage';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function HomePage() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleNavigation = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleSignup = () => {
    return (
      <div>
        <h1>SignUp Page</h1>
        <form>
          <label>
            First Name:
            <input type="text" name="firstName" />
          </label>
          <br />
          <label>
            Last Name:
            <input type="text" name="lastName" />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <br />
          <button type="submit">SignUp</button>
        </form>
      </div>
    );
    console.log('Signup button clicked');
  };
  const logoStyles = {
    fontSize: "32px",
    fontWeight: "bold",
    letterSpacing: "1px",
    textTransform: "uppercase",
    color: "#fff",
  };
  const formStyles = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    backgroundPosition: "right corner",
    marginRight: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    float: 'right',
    
    label: {
      display: 'block',
      marginBottom: '10px',
      fontWeight: 'bold',
      marginRight: '10px',
    },
  
    input: {
      padding: '10px',
      borderRadius: '5px',
      border: 'none',
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
      marginRight: '10px',
      width: '100%',
      boxSizing: 'border-box',
    },
  
    button: {
      backgroundColor: '#131313',
      color: '#fff',
      padding: '12px 24px',
      borderRadius: '4px',
      border: 'none',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  };
 

  const contentStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "calc(100vh - 60px)",
    padding: "0 64px",
    backgroundImage: `url(${homeImage})`,    
    backgroundRepeat: 'no-repeat', 
    backgroundSize: "auto 75%",
    marginTop:"60px",
    marginBottom:"60px",
    //backgroundPosition: "center",
    textAlign: "center",
    backgroundColor: "#623ecee0"
    
  };
  const buttonStyles = {
    backgroundColor: "#fff",
    color: "#131313",
    padding: "12px 24px",
    borderRadius: "4px",
    border: "none",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "32px",
  };
  const aboutStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "calc(100vh - 80px)",
    padding: "0 64px",
    backgroundColor: "#fff",
    color: "#131313",
    textAlign: "center",
    };

    
  return (
    <div>

      <header style={{
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "80px",
  padding: "0 64px",
  backgroundColor: "#000",
  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1,
}}>
  <div style={{
    fontSize: "32px",
    fontWeight: "bold",
    letterSpacing: "0.8px",
    color: "#fff",
    textTransform: "uppercase",
  }}>SKILL SNAPSHOT</div>
  <nav>
  <ul style={{
      listStyle: "none",
      display: "flex",
      alignItems: "center",
    }}>
      <li style={{ marginRight: "32px" }}>
        <button style={{ 
          backgroundColor: "transparent",
          color: "#fff",
          border: "none",
          fontSize: "16px",
          fontWeight: "bold",
        
          cursor: "pointer",
        }} onClick={() => handleNavigation(aboutRef)}>
          About
          
        </button>
      </li>
      <li style={{ marginRight: "32px" }}>
        <button style={{ 
          backgroundColor: "transparent",
          color: "#fff",
          border: "none",
          fontSize: "16px",
          fontWeight: "bold",
         
          cursor: "pointer",
        }} onClick={() => handleNavigation(projectsRef)}>
          Projects
        </button>
      </li>
      <li>
        <button style={{ 
          backgroundColor: "transparent",
          color: "#fff",
          border: "none",
          fontSize: "16px",
          fontWeight: "bold",
         
          cursor: "pointer",
        }} onClick={() => handleNavigation(contactRef)}>
          Contact
        </button>
      </li>
    </ul>

  </nav>

</header>
 <div style={{
     display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",   
    backgroundSize: "auto 65%",
    marginTop:"60px",
    marginBottom:"60px",
    textAlign: "center",
    float:"right"
  }}>
    <h1>Login</h1>
    <form style={formStyles}>
      <label style={formStyles.label}>Email:</label>
      <input type="email" name="email" style={formStyles.input} />

      <label style={formStyles.label}>Password:</label>
      <input type="password" name="password" style={formStyles.input} />

      <button style={formStyles.button}>Login</button>
    </form>
    
  </div>

<div style={contentStyles}>
        <h1 style={{ fontSize: "64px", fontWeight: "bold", marginBottom: "100px" }}></h1>
        {/* <h3 style={{ animationName: "rotate360", animationDuration: "5s", animationTimingFunction: "linear",fontSize: "32px", fontWeight: "bold",fontStyle: "italic", marginTop: "200px",color:"#000"}}>The Employee Performance Tracker</h3> */}
        <h3 style={{fontSize: "32px", fontWeight: "bold", fontStyle: "italic", marginTop: "200px", color:"#000"}}>
  { "The Employee Performance Tracker".split(" ").map((word, index) => (
    <React.Fragment key={index}>
      {index > 0 && " "} {/* Add space after first word */}
      {word.split("").map((letter, letterIndex) => (
        <span key={letterIndex} className="wave" style={{ animationDelay: `${0.1 * (letterIndex + 1)}s` }}>{letter}</span>
      ))}
    </React.Fragment>
  ))}
</h3>

      </div>
  
      
<div ref={aboutRef} style={aboutStyles}>
    <h1 style={{ fontSize: "48px", marginBottom: "32px" }}>About</h1>
    <p style={{ fontSize: "24px", lineHeight: "1.5" }}>
      hello
     </p>
    </div>
    </div>
  );
}

export default HomePage;

// export default App function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={HomePage} />
//         <Route path="/signup" component={SignUpPage} />
//       </Switch>
//     </Router>
//   );
// }

