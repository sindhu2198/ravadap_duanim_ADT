import React from 'react';
import AdminView from './AdminView';
import EmployeeView from './EmployeeView';

const Dashboardpage = () => {
  const userRole = localStorage.getItem('userRole');
  console.log("User role is: ",userRole);

  return (
    <>
      {userRole === 'admin' ? <AdminView /> : <EmployeeView />}
    </>
  );
};

export default Dashboardpage;
