import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Signout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    localStorage.removeItem('employeeId');
    navigate('/');
  }, [navigate]);

  return null;
};

export default Signout;
