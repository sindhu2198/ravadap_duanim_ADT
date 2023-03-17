// EmployeeReport.js

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";


const EmployeeReportCharts = () => {
  const { EID } = useParams();
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/get/${EID}`)
      .then((resp) => {
        if (resp.data.length > 0) {
          setEmployee({ ...resp.data[0] });
        } else {
          console.error("Employee not found");
        }
      });
  }, [EID]);

  const ratingData = [
    { name: "2021", rating: employee.rating_2021 },
    { name: "2022", rating: employee.rating_2022 },
    { name: "2023", rating: employee.rating_2023 },
  ];

  return (
    <div style={{ marginTop: "150px" }}>
      <h2>Employee Rating Report</h2>
      <BarChart
        width={500}
        height={300}
        data={ratingData}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="rating" fill="#8884d8" />
      </BarChart>
      <Link to="/GetAllEmp">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default EmployeeReportCharts;
