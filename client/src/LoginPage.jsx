import React, { useState } from 'react';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
          });
          const data = await response.json();
          const token = data.token;
          localStorage.setItem('token', token);
          // redirect to protected route
        } catch (error) {
          console.error(error);
    }
  };
}


export default Login;


