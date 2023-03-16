// import React, { useState } from "react";
// import jwt_decode from "jwt-decode";

// function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   function handleEmailChange(event) {
//     setEmail(event.target.value);
//   }

//   function handlePasswordChange(event) {
//     setPassword(event.target.value);
//   }

//   const handleSignIn = (event) => {
//     event.preventDefault(); // prevent default form submission behavior
//     fetch("http://localhost:3000/api/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ username, password }),
//       credentials: "include", // send cookies
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.loggedIn) {
//           // user successfully logged in, navigate to dashboard page
//           history.push("/dashboard");
//         } else {
//           alert("Wrong username/password combination!");
//         }
//       })
//       .catch((error) => console.error(error));
//   };


//   return (
//     <div style={{
//      display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",   
//     backgroundSize: "auto 65%",
//     marginTop:"60px",
//     marginBottom:"60px",
//     textAlign: "center",
//     float:"right"
//   }}>
//       <h1>Login</h1>
//       {errorMessage && <div className="error-message">{errorMessage}</div>}
//       <form onSubmit={handleS}>
//         <label>Email:</label>
//         <input type="email" name="email" value={email} onChange={handleEmailChange} required />

//         <label>Password:</label>
//         <input type="password" name="password" value={password} onChange={handlePasswordChange} required />

//         <button type="submit" onClick={handleSignIn}>Login</button>
//       </form>
//     </div>
//   );
// }

// export default LoginPage;
