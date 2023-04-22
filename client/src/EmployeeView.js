import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const EmployeeView = ({ employeeId }) => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/GetEmpforemp")
    })

    // You can return an empty fragment or loading message here
    return <div>Welcome to the Employee Dashboard</div>;
};


export default EmployeeView;