import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

const UserDashboard = () => {
    const logout = () => {

        localStorage.removeItem("permissionLevel");
        localStorage.removeItem("uId");
        localStorage.removeItem("email");
        localStorage.removeItem("name");
        localStorage.removeItem("contact");
        localStorage.removeItem("authToken");
    
        window.location.href = "/";
      };
    

    return(
        <>
            <button className="text-center" onClick={logout}>Logout</button>
            <h1>Dashboard</h1>      
        
        </>
    );
};

export default UserDashboard;