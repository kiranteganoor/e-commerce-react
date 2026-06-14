import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar2 from "../components/Navbar2";

 const UserDashboard = () =>{
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        const storedName = localStorage.getItem("name") || "";
        const storedPic = localStorage.getItem("profilePic") || "";
        setName(storedName);
        setProfilePic(storedPic);
    }, []);

    function logout(){
        localStorage.clear()
        navigate("/userlogin")
        toast.success("LogOut")
    }

    return (
        <>
        <Navbar2/>
        <div className="dashboard-container">
            <div className="dashboard-card">
                <div className="dashboard-avatar">
                    {profilePic ? (
                        <img className="dashboard-avatar-img" src={profilePic} alt="Profile" />
                    ) : (
                        <span className="dashboard-avatar-fallback">
                            {name ? name.charAt(0).toUpperCase() : "U"}
                        </span>
                    )}
                </div>
                <div className="dashboard-welcome">
                    <h1>Welcome, {name || "User"}</h1>
                    
                </div>
            </div>
            <div className="dashboard-actions">
                <button onClick={logout}>Logout</button>
            </div>
        </div>
        </>
    )
 }
 export default UserDashboard;