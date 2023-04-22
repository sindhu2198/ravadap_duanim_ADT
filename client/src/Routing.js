import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App1.css";
import Reports from "./Reports";
import App from "./App"
import CreateEmp from './CreateEmp';
import Signup from './Signup';
import Signin from './Signin';
import GetEmp from './GetEmp';
import Dashboardpage from './Dashboardpage';
import GetAllEmp from './GetAllEmp';
import EmployeeReportCharts from './EmployeeReportCharts';
import UpdateEmp from './UpdateEmp';
import FetchEmp  from './FetchEmp';
import Signout from './Signout';
import FetchEmpanddelete from './fetchanddelete';
import DeleteEmp from './DeleteEmp';
import NoEmployee from './NoEmployee';
import GetEmpforEmployee from './GetEmpforEmployee';

function Routing() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />         
          <Route path="/Reports" element={<Reports />} />
          <Route path="/Create" element={<CreateEmp />} />
          <Route path="/GetEmp" element={<GetEmp />} />
          <Route path="/GetEmp/:EID" element={<GetEmp />} />
          <Route path="/GetEmpforemp" element={<GetEmpforEmployee />} />
          <Route path="/GetEmpforemp/:EID" element={<GetEmpforEmployee />} />
          <Route path="/GetAllEmp" element={<GetAllEmp />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signout" element={<Signout />} />
          <Route path="/Dashboardpage" element={<Dashboardpage />} />
          <Route path="/fetch" element={<FetchEmp />} />
          <Route path="/fetchemp" element={<FetchEmpanddelete />} />
          <Route path="/delete/:EID" element={<DeleteEmp />} />
          <Route path="/update/:EID" element={<UpdateEmp />} />
          <Route path="/no-employee" element={<NoEmployee />} />
          <Route path="/EmployeeReportCharts/:EID" element={<EmployeeReportCharts />} />
          

        </Routes>
      </BrowserRouter>
    
  );
}

export default Routing;
