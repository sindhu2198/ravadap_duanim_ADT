import React, { useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";

const AdminView = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/Reports');
    }, [navigate]);

    // You can return an empty fragment or loading message here
    return <></>;
};

export default AdminView