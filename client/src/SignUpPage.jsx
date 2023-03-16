// import React, { useState } from "react";
// import Modal from 'react-modal';
// import HandleSignUp from "./HandleSignUp";

// const SignUpPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   // Handle sign up logic
//   const handleSignUp = (event) => {
//     event.preventDefault();

//     // Get the input fields
//     const emailInput = event.target.elements.email;
//     const passwordInput = event.target.elements.password;

//     // Get the values from the input fields
//     const email = emailInput.value;
//     const password = passwordInput.value;

//     // Perform sign up logic by sending a POST request to the API endpoint
//     fetch('/api/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         email,
//         password
//       })
//     })
//     .then(response => {
//       if (response.ok) {
//         // Display a success message
//         alert('Sign-up successful!');
//         // Close the modal
//         closeModal();
//       } else {
//         // Handle error response from the server
//         throw new Error('Sign-up failed');
//       }
//     })
//     .catch(error => {
//       console.error(error);
//       // Display an error message
//       alert('Sign-up failed');
//     });
//   };

//   return (
//     <div>
//       <h1>Sign Up Page</h1>
//       <HandleSignUp handleSignUp={openModal} />
//       <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
//         <h2>Sign Up</h2>
//         <form onSubmit={handleSignUp}>
//           <label>
//             Email:
//             <input type="email" name="email" required />
//           </label>
//           <label>
//             Password:
//             <input type="password" name="password" required />
//           </label>
//           <button type="submit">Sign Up</button>
//         </form>
//         <button onClick={closeModal}>Cancel</button>
//       </Modal>
//     </div>
//   );
// };

// export default SignUpPage;
