import React from 'react';
import AdminView from './AdminView';
import EmployeeView from './EmployeeView';

const Dashboardpage = () => {
  const userRole = localStorage.getItem('userRole');
  const employeeId = localStorage.getItem('employeeId');
  console.log("User role is: ",userRole);
  console.log("EmployeeID  is: ",employeeId);

  return (
    <>
      {userRole === 'admin' ? <AdminView /> : <EmployeeView employeeId={employeeId} />}
    </>
  );
};

export default Dashboardpage;
