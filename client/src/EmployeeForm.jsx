import React, { useState } from 'react';

function EmployeeForm({ addEmployee }) {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const employee = { name, position, salary };
    addEmployee(employee);
    setName('');
    setPosition('');
    setSalary('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          className="form-control"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="position">Position:</label>
        <input
          type="text"
          id="position"
          className="form-control"
          value={position}
          onChange={(event) => setPosition(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="salary">Salary:</label>
        <input
          type="number"
          id="salary"
          className="form-control"
          value={salary}
          onChange={(event) => setSalary(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Employee
      </button>
    </form>
  );
}

export default EmployeeForm;