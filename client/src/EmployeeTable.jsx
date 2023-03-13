import React from 'react';

function EmployeeTable({ employees, deleteEmployee }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Salary</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.position}</td>
            <td>{employee.salary}</td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteEmployee(employee.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
